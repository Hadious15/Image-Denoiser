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
# from skimage.util import img_as_float



def gaussian(image):
    img=cv2.imread(image)
    im2 = cv2.GaussianBlur(img,(3,3),0)     
    cv2.imshow('Gaussian Filter Applied',im2)
    cv2.waitKey(0)
    return im2
     
    
    
def NonLocalMeanFilter(image):
    img=cv2.imread(image)
    dst=cv2.fastNlMeansDenoisingColored(img,None,10,10,7,21)
    cv2.imshow('Non Local Mean Filter Applied',dst)
    cv2.waitKey(0)
    return dst
     

# def max(image):
#     img=cv2.imread(image)
#     im2 =cv2.max(img,3)    
#     cv2.imshow('Max Filter Applied',im2)
#     cv2.waitKey(0)
#     return im2

# def Weiner(image):
#     img5 = img_as_float(img5)
#     psf = np.ones((5,5)) / 25
#     img6 = convolve2d(img5,psf,'same')
#     img6 += 0.1 * img6.std() * np.random.standard_normal(img6.shape)
#     Wiener_filtered = restoration.wiener(img6,psf,1100)


def median(image):
    img=cv2.imread(image)
    im2 =cv2.medianBlur(img, 3)      
    cv2.imshow('Median Filter Applied',im2)
    cv2.waitKey(0)
    return im2
      


f=r'C:\Users\sawwa\OneDrive\Desktop\New folder (8)\New folder\Image-Denoiser-main\ImageClassifierML-Lastprototype\Updated\test'
y=os.listdir(f)


imgs=[]
for file in y:

    img =Image.open(f+'/'+file)
    img= img.crop((0,0,481,321)).convert('L')
    img=np.asarray(img)
    imgs.append(img)

imgs=np.asarray(imgs)    
imgs=np.expand_dims(imgs,axis=-1)



print("Please select one of the options below: \n 1: Remove Noise In An Image \n 2: Apply Edge Detection In An Image \n 3: Generate Image \n 0: Exit")
case = input('Enter your case: ')
case=int(case)


    

if(case==1):
    img=cv2.imread(f+'/'+file)
    img=cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cv2.imshow('Do A Visual Inspection ',img)
    cv2.waitKey(0)
    imgarr=np.asarray(img)
    plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
    plt.show()
    print("After Observing Your Image, ModelA works best for saltpepper/speckle noises,Whereas ModelB works best for exponential/guassian/poisson/rayleigh/uniform noises\n")
    print("1)ModelA\n2)ModelB")
    Modelcase = input('Enter your case: ')
    Modelcase=int(Modelcase)
    if(Modelcase==1):
        model=load_model('ClassifierModelA')
        x=os.listdir(r'C:\Users\sawwa\OneDrive\Desktop\New folder (8)\New folder\Image-Denoiser-main\ModelANoises')
        output=model.predict(imgs)
    else:
        model=load_model('ClassifierModelB')
        x=os.listdir(r'C:\Users\sawwa\OneDrive\Desktop\New folder (8)\New folder\Image-Denoiser-main\ModelBNoises')
        output=model.predict(imgs)


while(case!=0):
    for i in output:
        
        if(case==1):
        
            if(x[np.argmax(i)]=="exponential"):
                print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied NonLocalMean Filter:" )               
                imgarr=np.asarray(NonLocalMeanFilter(f+'/'+file))
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
            elif(x[np.argmax(i)]=="guassian"):
                print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied median Filter:" )               
                imgarr=np.asarray(median(f+'/'+file))
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
            elif(x[np.argmax(i)]=="rayleigh" or x[np.argmax(i)]=="poisson"):
                print("Noise Detected is rayleigh , Here is the image with the applied bilateral Filter:" )
                data=np.array(img)
                img = cv2.bilateralFilter(data,4,50,50)
                cv2.imshow("Bilateral Filter Applied",img)
                cv2.waitKey(0)
                imgarr=np.asarray(img)
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
                #done
            elif(x[np.argmax(i)]=="saltpepper"):
                print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied median Filter:" )               
                imgarr=np.asarray(median(f+'/'+file))
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
                #done
            elif(x[np.argmax(i)]=="speckle"): 
                print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied gaussian Filter:" )                
                imgarr=np.asarray(gaussian(f+'/'+file))
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
                #done
            elif(x[np.argmax(i)]=="uniform"): 
                print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied gaussian Filter:" )               
                imgarr=np.asarray(gaussian(f+'/'+file))
                plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
                plt.show()
                
        elif(case==2):
            img=cv2.imread(f+'/'+file)
            img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            img_blur = cv2.GaussianBlur(img_gray, (3,3), 0) 
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