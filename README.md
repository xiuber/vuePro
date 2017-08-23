# my-project  

> A Vue.js project  

这是一个 vue+node+mongoDB的一个简易的登录注册页面。   
用到的东西：    
- Vue-Cli    
- Vue-Resource   
- Node + Express   
- MongoDB     

1.全局安装Vue-Cli       
- npm install vue-cli -g       

2.在你想要放置项目的目录，进行初始化      
- vue init webpack XXX（项目名字）     

3.按提示走。      

4.启动项目：     
- cd XXX      
- npm install （推荐使用淘宝镜像cnpm，不然墙外的东西……，不会的度娘）     
- npm run dev    
出现vue欢迎界面，说明安装成功。     (安装成功后，以后启动vue，只需要在项目目录中，npm run dev就可以)

5.项目根目录新建server文件，默认是存放node相关文件。我们的后端所有文件。在server目录中新建三个文件。    
- index.js （入口文件）     
- db.js （设置数据库相关）    
- api.js （编写接口）       
目录结构参照该项目结构     

6.安装node框架express      
- npm install express –save     

7.安装mongodb：自行百度   

8.mongodb安装完成后，需要我们手动创建一个存放数据文件的文件，例如，我的mongodb安装在d盘，数据文件data也放在d盘（此处均为根目录下），进入data文件夹中，我们再创建一个名字为db的文件夹，当我们启动mongodb服务时，需要指明路径。启动方法：    

进入到mongodb安装目录下，bin文件中，打开命令输入：      
- mongod.exe –dbpath d:\data\db   
一般配置正确都会启动成功！  

9.后端部署好之后，进入server目录，运行     
- node index    
node就会运行起来，这个时候在浏览器地址栏输入我们请求的接口地址，就会显示出我们的数据，当然前提是已经有数据，否则显示是个空数组。http://localhost:8088/api/login/getAccount     

10.前端的运行：   
- npm run dev，参照第四条：启动项目.

10.前端打包：    
- npm run bulid     
会自动生成一个dist目录，里面的文件就是打包好的。     

以上就是这个简易的小项目所有操作方法
