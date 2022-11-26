from keras import models
from matplotlib import pyplot as plt
import numpy as np
import os
from PIL import Image

def load_real_samples():
    imgs = []

    f = r'C:\Users\whara\Desktop\habal\Machine learning\abstract art\Resized'
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

    f = r'C:\Users\whara\Desktop\habal\Machine learning\abstract art\Resized_noisy'
    folder = os.listdir(f)
    for file in folder:
        f_img = f+"/"+file
        img = Image.open(f_img)
        img = np.array(img)
        imgs.append(img)
    imgs = np.asarray(imgs)
    imgs = np.expand_dims(imgs,axis=-1)
    
    return imgs

def random_noisy_samples(noisy_data,real_data, n_samples):
    ix = np.random.randint(0, noisy_data.shape[0], n_samples)
    X = noisy_data[ix]
    y = real_data[ix]
    return X, y

noisy_data = load_noisy_samples()
real_data = load_real_samples()

r_model = models.load_model('Refiner_model')

noisy,real = random_noisy_samples(noisy_data,real_data,1)

result = r_model.predict(noisy)

fig,axs = plt.subplots(1,3,figsize = (10,10))

for i in axs:
    i.axis('off')
axs[0].imshow(noisy[0],cmap="gray")
axs[1].imshow(real[0],cmap="gray")
axs[2].imshow(1-(result[0]+1)/2,cmap="gray")

plt.tight_layout(w_pad=0.1,h_pad=0.1)
plt.show()
