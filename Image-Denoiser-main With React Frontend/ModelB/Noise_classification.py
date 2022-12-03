import tensorflow as tf
import numpy as np
from PIL import Image
from matplotlib import pyplot as plt
from keras.layers import Conv2D,BatchNormalization,MaxPooling2D,Flatten,Dense
from keras.losses import binary_crossentropy
import keras
import os
import PIL
import matplotlib.pyplot as plt

res=(321,481)

def MakeModel():
    
    discriminator_input = keras.Input(shape=(res[0],res[1],1),name="fake_fixed")
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(discriminator_input)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="valid")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Conv2D(32,(3,3),activation="relu",padding="same")(y)
    y = BatchNormalization()(y)
    y = MaxPooling2D(2,2)(y)
    y = Flatten()(y)
    y = Dense(50,activation='relu')(y)
    outputs = Dense(9,activation='softmax')(y)
    D_model = keras.Model(discriminator_input, outputs, name="discriminator")
    D_model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0002),loss="sparse_categorical_crossentropy",metrics=["accuracy"])
    
    return D_model

def load_real_samples():
    all_imgs = []
    Y=[]
    n = 0
    f = "E:/dataset/train_im"
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

model=MakeModel()
model.summary()
history=model.fit(dataset,labels,epochs=3,batch_size=5)

##Graphing accuracy
plt.plot(history.history['accuracy'])
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['train'],loc='upper left')
plt.show()
##Graphing Loss
plt.plot(history.history['loss'])
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['train'],loc='upper left')
plt.show()



model.save('Classifier')


















