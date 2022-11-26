from tkinter import Image
from keras.models import load_model
import numpy as np
from PIL import Image
import os
from PIL import Image
from PIL import ImageFilter
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg


# def gaussian(image):
#     mask = [[0.3679,0.6065,0.3679],[0.6065,1,0.6065],[0.3679,0.6065,0.3679]]
#     n=np.shape(mask)[0]
#     # convert image to numpy array
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     #n2=pow(n,2)
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             value = 0
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     value += int(data[i+l,j+w])*mask[l+int(n/2)][w+int(n/2)]
#             data_result[i,j] = int(value/4.8976)
#     # create Pillow image
#     image2 = Image.fromarray(data_result)
#     #image2.save('C:/Images/2.jpg')
#     imgplot = plt.imshow(image2,cmap="gray")
#     plt.show()
    


f=r'E:\dataset\DatasetModelA\test_im\speckle'
x=os.listdir(r'C:\Users\USER\Desktop\TwoModels\ModelA')
print(x)

y=os.listdir(f)

model=load_model('classifierModelA')
imgs=[]
for file in y:

    img =Image.open(f+'/'+file)
    
    newsize=(481,321)
    # img.thumbnail((321,481))
    # # print(img.size)
    # imagge=img.resize(newsize)
    # imagge=imagge.convert('L')
    # plt.imshow(imagge,cmap='gray')
    # plt.show()
    imagge = img.crop((0,0,481,321)).convert('L')
    img=np.asarray(imagge)
    imgs.append(img)

imgs=np.asarray(imgs)    
imgs=np.expand_dims(imgs,axis=-1)


output=model.predict(imgs)
for i in output:
    print(x[np.argmax(i)])
  

#maher'scodeandhadi'sIntegration

# def median(image):
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     n=3 
#     n2=pow(n,2)
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             value = 0
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     value += int(data[i+l][j+w])
#             value = int(value/n2)        
#             data_result[i][j]= value
#     image2 = Image.fromarray(data_result)
#     display(image2,'Arithmetic Mean Filter')
#     image2 = image.filter(ImageFilter.BoxBlur(radius=1))
#     display(image2,'Arithmetic Mean Filter Python')

# #pepper

# def max(image):
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     n=3 
#     #n is always odd
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             value1 = int(data[i,j])
#             value2 = int(data[i,j])
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     value1 = max(int(data[i+l,j+w]),value1)
#             #value = int(value1) # max Filter   
#             #value = int(value2) # min Filter 
#             value = int((value1+value2)/2) # midpoint Filter   
#             data_result[i][j]= value
#     # create Pillow image
#     image2 = Image.fromarray(data_result)
#     #image2.save('C:/Images/2.jpg')
#     print(image2,'Image Result')

# #salt

# def min(image):
#     # convert image to numpy array
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     n=3 #n is always odd
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             value1 = int(data[i,j])
#             value2 = int(data[i,j])
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     value1 = max(int(data[i+l,j+w]),value1)
#                     value2 = min(int(data[i+l,j+w]),value2)
#             #value = int(value1) # max Filter   
#             #value = int(value2) # min Filter 
#             value = int((value1+value2)/2) # midpoint Filter   
#             data_result[i][j]= value
#     # create Pillow image
#     image2 = Image.fromarray(data_result)
#     #image2.save('C:/Images/2.jpg')
#     display(image2,'Image Result')

# #saltandpepper

# def median(image):
#     # convert image to numpy array
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     n=3
#     n2=pow(n,2)
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             temp_array = np.empty((0))
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     temp_array = np.append(temp_array, int(data[i+l,j+w]))
#             temp_array = np.sort(temp_array)
#             value = temp_array[int(n2/2)]        
#             data_result[i][j]= value
#     # create Pillow image
#     image2 = Image.fromarray(data_result)
#     #image2.save('C:/Images/2.jpg')
#     display(image2,'Median Filter')

#     image2 = image.filter(ImageFilter.MedianFilter(3))
#     display(image2,'Median Filter Python')

    
# #uniform,gaussian,exponential,speckle


# def alphatrimmed():
#     # convert image to numpy array
#     data = np.array(image)
#     data_result = np.array(image)
#     row,col = data.shape
#     n=3
#     n2=pow(n,2)
#     alpha = 2
#     for i in range(int(n/2), row-int(n/2)):
#         for j in range(int(n/2), col-int(n/2)):
#             temp_array = np.empty((0))
#             for l in range(-1*int(n/2),int(n/2)+1):
#                 for w in range(-1*int(n/2),int(n/2)+1):
#                     temp_array = np.append(temp_array, int(data[i+l,j+w]))
#             temp_array = np.sort(temp_array)
#             value = 0.
#             for k in range(alpha,int(n2)-alpha):
#                 value += int(temp_array[k])
#             value = int(value/(n2-2*alpha))        
#             data_result[i][j]= value
#     # create Pillow image
#     image2 = Image.fromarray(data_result)
#     #image2.save('C:/Images/2.jpg')
#     display(image2,'Alpha-trimmed mean Filter')
    

# # image =Image.open(f+'/'+file).convert('L') 
# print("Please select one of the options below: \n")
# print("1: Remove Noise In An Image \n")
# print("2: Apply Edge Detection In An Image \n")
# print("3: Generate Image \n")
# print("0: Exit")
# noise="gaussian"
# x = int(input('Enter your case: '))
# while(x!=0):
#     if(x==1):
#         if(x[np.argmax(i)]=="erlang"):
#             print("1")
#         elif(x[np.argmax(i)]=="exponential"):
#             print("2")
#         elif(x[np.argmax(i)]=="gaussian"):
#             gaussian(image)
#         elif(x[np.argmax(i)]=="lognormal"):
#             print("4")
#         elif(x[np.argmax(i)]=="poisson"):
#             print("5")
#         elif(x[np.argmax(i)]=="rayleigh"):
#             print("6")
#         elif(x[np.argmax(i)]=="saltpepper"):
#             print("7")
#         elif(x[np.argmax(i)]=="speckle"):
#             print("8")
#         elif(x[np.argmax(i)]=="uniform"):
#             print("9")
#         else:
#             print("yes")            
#     elif(x==2):
#         print("10")   
#     elif(x==3):
#         print("11")
#     else:
#         print("12")
#     print("Please select one of the options below: \n 1: Remove Noise In An Image \n 2: Apply Edge Detection In An Image \n 3: Generate Image \n 0: Exit")
#     x = int(input('Enter your case: '))
