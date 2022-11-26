import os
import numpy as np
from PIL import Image

def noisy(noise_typ,image):   #dataset creator
   if noise_typ == "gauss":
      col,row= image.size
      image = np.asarray(image)
      mean = 0
      var = 100
      sigma = 50
      gauss = np.random.normal(mean,sigma,(row,col,1))*0.5
      gauss = gauss.reshape(row,col)
      image = image.reshape(row,col)
      noisy = image + gauss
      noisy = np.clip(noisy,0,255)
      noisy = noisy.astype(np.uint8)
      return noisy
   else:
       print("???????")
       return 0

f = r'E:/mldatasetpoki/archive/Pokemon Dataset'
imgs = os.listdir(f)

for file in imgs:
    f_img = f+"/"+file
    img = Image.open(f_img).convert("L")
    img = noisy("gauss",img)
    img = Image.fromarray(img)
    img.save("E:/mldatasetpoki/noisypoki" + "/"+"NOISY_" +file)