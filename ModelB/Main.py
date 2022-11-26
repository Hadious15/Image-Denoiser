from statistics import mode
import tensorflow as tf
import numpy as np
from PIL import Image
from matplotlib import pyplot as plt
from keras.layers import Conv2D,BatchNormalization,Add,ReLU,MaxPooling2D,Flatten,Dense
from keras.losses import binary_crossentropy
from keras import Sequential
import keras
import os

res = 475

def resblock(x, kernelsize, filters):
    fx = Conv2D(filters, kernelsize, activation='relu', padding='same')(x)
    fx = BatchNormalization()(fx)
    fx = Conv2D(filters, kernelsize, padding='same')(fx)
    fx = BatchNormalization()(fx)
    out = Add()([x,fx])
    out = ReLU()(out)
    return out

def MakeRefiner():
    refiner_input = keras.Input(shape=(res,res,1), name="img")
    x = Conv2D(64,(3,3),activation='relu',padding="same")(refiner_input)
    x = BatchNormalization()(x)
    for _ in range(8):
        x = resblock(x,(3,3),64)
   
    outputs = Conv2D(1,(1,1),activation='tanh')(x)
    R_model = keras.Model(refiner_input, outputs, name="Refiner")
    return R_model

def MakeDiscriminator():
    
    discriminator_input = keras.Input(shape=(res,res,1),name="fake_fixed")
    y = Conv2D(16,(5,5),activation="relu",padding="valid",strides=(2,2))(discriminator_input)
    y = BatchNormalization()(y)
    y = Conv2D(16,(5,5),activation="relu",padding="valid",strides=(2,2))(y)
    y = BatchNormalization()(y)
    y = Conv2D(16,(3,3),activation="relu",padding="valid",strides=(2,2))(y)
    y = MaxPooling2D(2)(y)
    y = Conv2D(16,(1,1),activation="relu",padding="same")(y)
    
    y = Conv2D(2,(1,1),activation="relu",padding="same")(y)
    y = Flatten()(y)
    outputs = Dense(1,activation='sigmoid')(y)
    D_model = keras.Model(discriminator_input, outputs, name="discriminator")
    D_model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0002,beta_1=0.4),loss=binary_crossentropy,metrics="accuracy")
    
    
    return D_model

def Train_Discriminator(d_model,noisy_data,real_data,n_iter=10, n_batch=50):
	half_batch = int(n_batch / 2)
	for i in range(n_iter):

		X_real, y_real = generate_real_samples(real_data, half_batch)
		_, real_acc = d_model.train_on_batch(X_real, y_real)

		X_noisy, y_noisy = generate_noisy_samples(noisy_data,half_batch)
		_, noisy_acc = d_model.train_on_batch(X_noisy, y_noisy)

		print('>%d real=%.0f%% fake=%.0f%%' % (i+1, real_acc*100, noisy_acc*100))

def Make_Model(r_model,d_model):
    d_model.trainable = False
    
    model = Sequential()
    
    model.add(r_model)
    model.add(d_model)
    
    model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0003),loss=binary_crossentropy)
    model.summary()
    return model

def train_MODEL(r_model, d_model, MODEL, real_data,noisy_data, n_epochs=5, n_batch=50):
    r_model.save('Refiner_model')
    # bat_per_epo = int(real_data.shape[0] / n_batch)
    bat_per_epo = 25
    half_batch = int(n_batch / 2)

    for i in range(n_epochs):
        
        for j in range(bat_per_epo):

            X_real, y_real = generate_real_samples(real_data, half_batch)

            X_fake, y_fake = generate_fakeClean_samples(r_model, noisy_data, half_batch)

            X, y = np.vstack((X_real, X_fake)), np.vstack((y_real, y_fake))

            d_loss, d_acc = d_model.train_on_batch(X, y)
            for _ in range (3):
                X_MODEL, y_MODEL = random_noisy_samples_InvertedLabel(noisy_data, n_batch)

                Model_loss = MODEL.train_on_batch(X_MODEL, y_MODEL)

            print('>Epoch: %d, %d/%d, Dis_loss=%.3f, model_loss=%.3f, Dis_acc=%.0f%% ' % (i+1, j+1, bat_per_epo, d_loss, Model_loss, d_acc*100))
        r_model.save('Refiner_model')

def load_real_samples():
    imgs = []

    f = r'E:/mldatasetpoki/nigga'
    folder = os.listdir(f)
    for file in folder:
        f_img = f+"/"+file
        img = Image.open(f_img)
        img = np.array(img)
        imgs.append(img)
    imgs = np.asarray(imgs)
    imgs = np.expand_dims(imgs,axis=-1)
    
    return imgs

def load_noisy_samples():
    imgs = []
    # (trainX, _), (_, _) = load_data()
    # X = np.expand_dims(trainX, axis=-1)
    # X = X.astype('float32')
    # X = X / 255.0


    f = r'E:/mldatasetpoki/noisypoki'
    folder = os.listdir(f)
    for file in folder:
        f_img = f+"/"+file
        img = Image.open(f_img)
        img = np.array(img)
        imgs.append(img)
    imgs = np.asarray(imgs)
    imgs = np.expand_dims(imgs,axis=-1)
    
    return imgs

def generate_real_samples(dataset, n_samples):
    ix = np.random.randint(0, dataset.shape[0], n_samples)
    X = dataset[ix]
    # X = np.asarray(X)
    y = np.ones((n_samples, 1))
    return X, y

def generate_noisy_samples(dataset, n_samples):
	ix = np.random.randint(0, dataset.shape[0], n_samples)
	X = dataset[ix]
	y = np.zeros((n_samples, 1))
	return X, y

def random_noisy_samples_InvertedLabel(dataset, n_samples):
	ix = np.random.randint(0, dataset.shape[0], n_samples)
	X = dataset[ix]
	y = np.ones((n_samples, 1))
	return X, y

def generate_fakeClean_samples(r_model,dataset, n_samples):
	ix = np.random.randint(0, dataset.shape[0], n_samples)
	X = r_model.predict(dataset[ix])
	y = np.zeros((n_samples, 1))
	return X, y

real_data = load_real_samples()
noisy_data = load_noisy_samples()

D_model = MakeDiscriminator()
#R_model = MakeRefiner()
#model = Make_Model(R_model,D_model)
Train_Discriminator(D_model,noisy_data,real_data,100,300)
# try refiner lahala

# x,y = generate_noisy_samples(noisy_data,1)
# conv_img = R_model.predict(x)
# conv_img[0] = (conv_img[0]+1)/2.0
# np.set_printoptions(precision=3)
# plt.subplot(1,2,1)
# plt.imshow(x[0],cmap="gray")
# plt.subplot(1,2,2)
# plt.imshow(conv_img[0],cmap="gray")
# print(conv_img[0])

# x,y = generate_real_samples(real_data,10)
# print(x.shape)
# plt.imshow(x[0],cmap="gray")

# Train_Discriminator(R_model,D_model,noisy_data,real_data,50,20)

#train_MODEL(R_model,D_model,model,real_data,noisy_data,10,6)

# x,_ = generate_fakeClean_samples(R_model,noisy_data,250)
# print(x.shape)

plt.show()
