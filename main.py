from flask import Flask, request,render_template,send_file
import os
from werkzeug.utils import secure_filename
#import cv2
#from predict import predict
from client import main
from PIL import Image
import io


UPLOAD_FOLDER = 'static/images/'
PROCESSED_FOLDER = 'static/images_processed/'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER
@app.route("/", methods=['GET', 'POST'])
def mainpage():
  return render_template('index.html',image="static/images/baby.png",image_blur="static/images/baby_blurred.png")


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/upload", methods=['GET', 'POST'])
def upload():

  ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
  if request.method == 'POST':
        # check if the post request has the file part
        #if 'file' not in request.files:
        #    return render_template('index.html',filename='')
        file = request.files['pic']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            image_path=os.path.join(app.config['UPLOAD_FOLDER'],"tmp.png")
            image_processed_path=os.path.join(app.config['PROCESSED_FOLDER'], "tmp_processed.png")
            #os.mkdir("s")
            file.save(image_path)
            img=pil_image = Image.open(file)
            #predicted=predict(image_path,image_processed_path)
            predicted=main(img,image_processed_path)
            #cv2.imwrite(image_processed_path,predicted) 
            print("the type is",type(predicted))
            predicted[predicted<0]=0
            predicted[predicted >255] = 255
            predicted = Image.fromarray(predicted.astype('uint8'), 'RGB')
            print("the type is",type(predicted))
            image_file = io.BytesIO()
            predicted.save(image_file , "JPEG")
            image_file .seek(0)
            #predicted.save(image_processed_path)
            filename=filename.split(".")
            return send_file(image_file , as_attachment=True, attachment_filename=filename[0]+".JPEG")
 
            #return render_template('index.html',image=image_processed_path,image_blur=image_path)

  return render_template('index.html')




if __name__=="__main__":
   app.run(debug = True)


