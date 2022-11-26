from tkinter import Image
from keras.models import load_model
import numpy as np
from PIL import Image
import os
from PIL import Image, ImageFilter
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import cv2



def gaussian(image):
    img=cv2.imread(image)
    im2 = cv2.GaussianBlur(img,(3,3),0)     
    cv2.imshow('Gaussian Filter Applied',im2)
    cv2.waitKey(0)  
    
    
def NonLocalMeanFilter(image):
    img=cv2.imread(image)
    dst=cv2.fastNlMeansDenoisingColored(img,None,10,10,7,21)
    cv2.imshow('Non Local Mean Filter Applied',dst)
    cv2.waitKey(0)  

def median(image):
    img=cv2.imread(image)
    im2 =cv2.medianBlur(img, 3)      
    cv2.imshow('Median Filter Applied',im2)
    cv2.waitKey(0)  


f=r'C:\Users\user\Desktop\Image project\test'
x=os.listdir(r'C:\Users\user\Desktop\Image project\ohio')
y=os.listdir(f)

model=load_model('classifier')
imgs=[]
for file in y:

    img =Image.open(f+'/'+file)
    img= img.crop((0,0,481,321)).convert('L')
    img=np.asarray(img)
    imgs.append(img)

imgs=np.asarray(imgs)    
imgs=np.expand_dims(imgs,axis=-1)




output=model.predict(imgs)
print(output)
case = input('Enter your case: ')
case=int(case)
while(case!=0):
    for i in output:
        image=Image.open(f+'/'+file)
        image=image.convert('L')
        if(case==1):
            if(x[np.argmax(i)]=="erlang"):
                print("Noise detected is Erlang 'Gamma' Noise. Unfortunately no Filter is available")
            elif(x[np.argmax(i)]=="exponential"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                NonLocalMeanFilter(f+'/'+file)
            elif(x[np.argmax(i)]=="gaussian"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                median(f+'/'+file)
            elif(x[np.argmax(i)]=="lognormal"):
                print("Noise detected is LogNormal Noise. Unfortunately no Filter is available")
            elif(x[np.argmax(i)]=="poisson"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                NonLocalMeanFilter(f+'/'+file)
            elif(x[np.argmax(i)]=="rayleigh"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                data=np.array(image)
                image = cv2.bilateralFilter(data,4,50,50)
                cv2.imshow("Image without rayleigh",image)
                cv2.waitKey(0)
                #done
            elif(x[np.argmax(i)]=="saltpepper"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                median(f+'/'+file)
                #done
            elif(x[np.argmax(i)]=="speckle"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                gaussian(f+'/'+file)
                #done
            elif(x[np.argmax(i)]=="uniform"):
                print("Noise Detected is " + x[np.argmax(i)] + " Here is the image with the applied Filter:" )
                gaussian(f+'/'+file)
                #done
        elif(case==2):
            img=cv2.imread(f+'/'+file)
            img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            # Blur the image for better edge detection
            img_blur = cv2.GaussianBlur(img_gray, (3,3), 0) 

            # Canny Edge Detection
            edges = cv2.Canny(image=img_blur, threshold1=100, threshold2=200) # Canny Edge Detection
            # Display Canny Edge Detection Image
            cv2.imshow('Canny Edge Detection', edges)
            cv2.waitKey(0)   
        elif(case==3):
            print("11")
        else:
            print("You Entered An Invalid Number, Please Try Again!")
        print("Please select one of the options below: \n 1: Remove Noise In An Image \n 2: Apply Edge Detection In An Image \n 3: Generate Image \n 0: Exit")
        case = int(input('Enter your case: '))


