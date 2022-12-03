
import tensorflow as tf
import numpy as np
from PIL import Image
from matplotlib import pyplot as plt
from keras.layers import Conv2D,BatchNormalization,MaxPooling2D,Flatten,Dense,Dropout
from keras.losses import binary_crossentropy
import keras
import os
import PIL
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
import time




res=(321,481)

callback = tf.keras.callbacks.EarlyStopping(monitor='val_accuracy', patience=6)
def MakeModel():
    
    discriminator_input = keras.Input(shape=(res[0],res[1],1),name="fake_fixed")
    y = Conv2D(16,(3,3),activation="relu",padding="valid")(discriminator_input)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Flatten()(y)
    y = Dense(128,activation='relu')(y)
    #y = Dense(128,activation='relu')(y)
    y=Dropout(0.5)(y) #lessen 0.5
    outputs = Dense(2,activation='softmax')(y)#no erlang and no lognormal
    D_model = keras.Model(discriminator_input, outputs, name="discriminator")
    D_model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0002),loss="sparse_categorical_crossentropy",metrics=["accuracy"])
    
    return D_model

def load_real_samples():
    all_imgs = []
    Y=[]
    n = 0
    f = "E:/dataset/DatasetModelA/train_im"
    folders = os.listdir(f)
    for folder in folders:
        
        imgs=0
        x=os.listdir(f+"/"+folder)
        for file in x:
            f_img = f+"/"+folder+"/"+file
            img = Image.open(f_img).convert("L")
            if(img.size[0]<481 ):
                img=img.rotate(90,Image.NEAREST,expand=1)
            
            img = np.array(img)
            imgs+=1
            all_imgs.append(img)
           
        
       
        for _ in range (imgs):
            Y.append(n)

        n+=1      

    all_imgs = np.asarray(all_imgs)

    all_imgs = np.expand_dims(all_imgs,axis=-1)
    
    print(all_imgs.shape)
    X = all_imgs
    Y=np.asarray(Y)
    print(Y)


    return X, Y





dataset,labels=load_real_samples()

x_train, x_valid, y_train, y_valid = train_test_split(dataset, labels, test_size=0.33, shuffle= True)

model=MakeModel()
model.summary() 
start_time = time.time()

history=model.fit(x_train,y_train,epochs=30,batch_size=4,validation_data=(x_valid,y_valid),callbacks=[callback])
time_took = time.time() - start_time
print(time_took/60)
##Graphing accuracy
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train','test'],loc='upper left')
plt.show()
##Graphing Loss
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train','test'],loc='upper left')
plt.show()



model.save('ClassifierModelA')


















