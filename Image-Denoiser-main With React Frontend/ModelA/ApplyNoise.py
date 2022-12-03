import numpy as np
from matplotlib import pyplot as plt
from PIL import Image

def noisy(noise_typ,image):      #noise generator
   if noise_typ == "gauss":
      (col,row),ch= (image.size,1)
      image = np.asarray(image)

      mean = 0
      var = 100
      sigma = 50
      gauss = np.random.normal(mean,sigma,(row,col,ch))*0.5
      print(gauss)
      gauss = gauss.reshape(row,col,ch)
      image = image.reshape(row,col,ch)
      noisy = image + gauss

      noisy = np.clip(noisy,0,255)
      noisy = noisy.astype(np.uint8)
      return noisy
   else:
       print("???????")
       return 0
    
plt.axis('off')
img = Image.open("omme.jpg").convert("L")
plt.subplot(1,2,1)
plt.imshow(img,cmap="gray")

noisy_img = noisy("gauss",img)
plt.subplot(1,2,2)
plt.imshow(noisy_img,cmap="gray")

plt.show()
