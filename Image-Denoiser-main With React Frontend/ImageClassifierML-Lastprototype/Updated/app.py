from flask import Flask,request
from flask_cors import CORS
from firebase_admin import credentials,initialize_app,storage
from uuid import uuid4
from tkinter import Image
from keras.models import load_model
import numpy as np
import os
from PIL import Image, ImageFilter
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.figure import Figure
import matplotlib.image as mpimg
import cv2
import urllib.request
import openai
openai.api_key ="put Dalle api here" #add your Open ai "Dall-e"api
openai.Model.list()
import base64
from io import BytesIO
import datetime

def gaussian(image):
    img=cv2.imread(image)
    im2 = cv2.GaussianBlur(img,(3,3),0) 
    cv2.imwrite('output.jpg', im2)
    return im2
    
def NonLocalMeanFilter(image):
    img=cv2.imread(image)
    dst=cv2.fastNlMeansDenoisingColored(img,None,10,10,7,21)
    cv2.imwrite('output.jpg', dst)
    return dst 
    
def median(image):
    img=cv2.imread(image)
    im2 =cv2.medianBlur(img, 3) 
    cv2.imwrite('output.jpg', im2)
    return im2
      




# Imports and file directory
f=r'E:\DenoisingImageProcessingProject\Image-Denoiser\Image-Denoiser-main\ImageClassifierML-Lastprototype\Updated\test' #change directory to test folder on your computer 
y=os.listdir(f)
imgs=[]
for file in y:

    img =Image.open(f+'/'+file)
    img= img.crop((0,0,481,321)).convert('L')
    img=np.asarray(img)
    imgs.append(img)

imgs=np.asarray(imgs)    
imgs=np.expand_dims(imgs,axis=-1)


# End 

cred = credentials.Certificate("./key.json")
default_app = initialize_app(cred, {
    'storageBucket': 'imageprocessingproject-425ee.appspot.com'
})
bucket = storage.bucket()


app = Flask(__name__)
CORS(app)
@app.route('/upload', methods=['GET', 'POST'])
def upload():
 
  Im = request.json.get('image')
  req = urllib.request.urlopen(Im)
  arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
  imageFromUrl = cv2.imdecode(arr, -1)
  cv2.imwrite('input.jpg', imageFromUrl)
  image=Image.open("./input.jpg")
  img= image.convert('L')
  imgarr=np.asarray(img)
  plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
  plt.show()
  return "Successfull"

@app.route('/edgeDetection', methods=['GET', 'POST'])
def edgeDetection():
  Im = request.json.get('image')
  req = urllib.request.urlopen(Im)
  arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
  imageFromUrl = cv2.imdecode(arr, -1)

  img_blur = cv2.GaussianBlur(imageFromUrl, (3,3), 0) 
  edges = cv2.Canny(image=img_blur, threshold1=100, threshold2=200) # Canny Edge Detection
  # Display Sending back the image using firebase storage
  cv2.imwrite('edgeDetection.jpg',edges)
  x = datetime.datetime.now()
  path="Images/"+str(x)
  blob = bucket.blob(path)
  blob.upload_from_filename(filename="./edgeDetection.jpg", content_type='image/jpg')
  blob.make_public()
  return blob.public_url


@app.route('/dalle', methods=['GET', 'POST'])
def dalle():
  promptFromFront = request.json.get('prompt')
  response = openai.Image.create(
  prompt=promptFromFront,
  n=1,
  size="1024x1024"
  )
  imageUrl= response['data'][0]['url']
  return imageUrl
@app.route('/noise', methods=['GET', 'POST'])
def noiseDetect():
    imgs=[]
    image=Image.open("./input.jpg")
    img= image.crop((0,0,481,321)).convert('L')
    imgarr=np.asarray(img)
    imgs.append(imgarr)
    imgs=np.asarray(imgs)
    imgs=np.expand_dims(imgs,axis=-1)

    Modelcase = request.json.get('modelCase')
    Modelcase=int(Modelcase)
    print(Modelcase)
    if(Modelcase==1):
        model=load_model('ClassifierModelA')
        x=os.listdir(r'E:\DenoisingImageProcessingProject\Image-Denoiser\Image-Denoiser-main\ModelANoises')#Change directory to ModelANoises on your Computer
        output=model.predict(imgs)
    else:
        model=load_model('ClassifierModelB')
        x=os.listdir(r'E:\DenoisingImageProcessingProject\Image-Denoiser\Image-Denoiser-main\ModelBNoises')#Change directory to ModelBNoises on your Computer
        output=model.predict(imgs)
    urlToFront=""
    noiseType="No Noise detected"
    filterApplied="Unfortunately no filter available"
    for i in output:
      if(x[np.argmax(i)]=="exponential"):
            print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied NonLocalMean Filter:" )
            noiseType="Exponential"   
            filterApplied="Therefore NonLocalMean filter was applied"   
            imgarr=np.asarray(NonLocalMeanFilter("./input.jpg"))
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show()
      elif(x[np.argmax(i)]=="guassian"):
            print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied median Filter:" )  
            noiseType="Guassian"   
            filterApplied="Therefore Median filter was applied"          
            imgarr=np.asarray(median("./input.jpg"))
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show()
      elif(x[np.argmax(i)]=="rayleigh" or x[np.argmax(i)]=="poisson"):
            print("Noise Detected is rayleigh , Here is the image with the applied bilateral Filter:" )
            noiseType="Rayleigh"   
            filterApplied="Therefore Bilateral filter was applied"    
            data=np.array(img)
            img = cv2.bilateralFilter(data,4,50,50)
            cv2.imwrite('output.jpg', img)
            imgarr=np.asarray(img)
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show()
            #done
      elif(x[np.argmax(i)]=="saltpepper"):
            print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied median Filter:" )    
            noiseType="Salt&Pepper"   
            filterApplied="Therefore Median filter was applied"           
            imgarr=np.asarray(median("./input.jpg"))
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show()
            #done
      elif(x[np.argmax(i)]=="speckle"): 
            print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied gaussian Filter:" ) 
            noiseType="Speckle"   
            filterApplied="Therefore Guassian filter was applied"               
            imgarr=np.asarray(gaussian("./input.jpg"))
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show()
            #done
      elif(x[np.argmax(i)]=="uniform"): 
            print("Noise Detected is " + x[np.argmax(i)] + ", Here is the image with the applied gaussian Filter:" )   
            noiseType="Uniform"   
            filterApplied="Therefore Guassian filter was applied"            
            imgarr=np.asarray(gaussian("./input.jpg"))
            plt.hist(imgarr.ravel(), bins=256, range=(0.0, 255.0), fc='k', ec='k')
            plt.show() 
      x = datetime.datetime.now()
    path="Images/"+str(x)
    blob = bucket.blob(path)
    blob.upload_from_filename(filename="./output.jpg", content_type='image/jpg')
    blob.make_public()
    return {"url":blob.public_url,"noise":noiseType,"filter":filterApplied}
if __name__ == "__main__":
  app.run(host='0.0.0.0',port=5000)







