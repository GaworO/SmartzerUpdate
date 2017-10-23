# Smartzer_Update
This aplication is build with Java and JavaScript on SpringBoot , ThymeLeaf with usage of Bootstrap.


What can be found in the app ? 

Controllers : 
1) UserController - In this controller database is beeing created as a Map with Key - Name and Value - Age. It can be accessed at address   @GetMapping("/user"). In this controller there is also an action of redirecting all of the added users to the view. It can be accessed at address  @GetMapping("/users").
2) HomeController - which redirects to the home page (@RequestMapping("/")

Entity : 
1) User with fields , getters , setters and construtor : 
    private long id;
    private String name;
    private int age;

In this entity there is also a method that is later used to add a new User to the list in controller UserController ( public User setValues(String name , Integer age ).

In resources there are 2 folders. 

1) static.js - in the folders js is available .js file with sorting method  sort.addEventListener("click", function (event) , in css are all the css changes. There is also a bootsrtap folder for all css , js and bootstrap files. 
2) templates - here are the views 


The file can be run threw commend in cmd : mvnw spring-boot:run it will be than avaliable in localhost:8080. 
Also you can run it by importing the file to ide like : Eclipse or Intelijay if maven is already on your system and run it from there.
