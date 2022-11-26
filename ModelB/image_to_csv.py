import PIL
import os
from PIL import Image
import numpy as np
from matplotlib import pyplot as plt

f = r'E:\dataset\train_im'
folders= os.listdir(f)



for folder in folders:
    os.mkdir("E:\CroppedNoisy" +"/"+folder)
    x=os.listdir(f+"/"+folder)

 
    for file in x:

        
        f_img = f+"/"+folder +"/"+file
        img = Image.open(f_img).convert("L")
        
        
        img.save("E:\CroppedNoisy" + "/"+folder+"/"+file)
        
