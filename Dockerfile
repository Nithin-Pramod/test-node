FROM node:alpine3.10

#Make app directory in container
RUN mkdir /app

#Identify working directory
WORKDIR /app

#Copy over app to app folder
COPY . /app 

#Expose server at port ( accessible outside of container)
EXPOSE 8080 

#Start app 
CMD ["node", "server.js"]