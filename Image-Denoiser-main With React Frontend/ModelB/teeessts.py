
import numpy as np
import matplotlib.image as img
import pandas as pd
from PIL import Image
import os 


f = r'E:\mldatasetpoki\archive\Pokemon Dataset'
imgslist = os.listdir(f)
imgs=np.array()
for file in imgslist:
    
    f_img = f+"/"+file
    img = Image.open(f_img).convert("L")
   # img = Image.fromarray(img)
    np.append(imgs , img)
# read an image
# imageMat = img.imread('DatabaseImage0002gauimgNoise10.jpg')
# print("Image shape:",
#       imageMat.shape)

print(imgs.shape) 
# if image is grayscale

  # remain as it is

     
# converting it to dataframe.
# mat_df = pd.DataFrame(imageMat)
 
# # exporting dataframe to CSV file.
# mat_df.to_csv('dataset.csv',
#               header = 'Img'
#             )
 
# retrieving dataframe from CSV file
# loaded_df = pd.read_csv('dataset.csv',
#                         sep = ',',
#                         header = None)
# # getting matrice values.
# loaded_2D_mat = loaded_df.values
 
# # reshaping it to 3D matrice
# loaded_mat = loaded_2D_mat.reshape(loaded_2D_mat.shape[0],
#                                    loaded_2D_mat.shape[1] // imageMat.shape[2],
#                                    imageMat.shape[2])
 
# print("Image shape of loaded Image :",
#       loaded_mat.shape)
 
# # check if both matrice have same shape or not
# if((imageMat == loaded_mat).all()):
#   print("\n\nYes",
#         "The loaded matrice from CSV file is same as original image matrice")