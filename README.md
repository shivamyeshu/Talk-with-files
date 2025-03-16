This project is under developing mode 
## what the application is for ?
Basically I am building an saas application 
where one can come and add the file 
n talk with the application n file about them 
asks the few n no question 

### workflow : 
1 user come 
2 user authanticate itself 
3 user upload pdf 
4 pdf got dibvided in chunk -> vectorization
5 the vec -> snd to llm 
6 user ask ques ( in reply he got the ans from getting info from kb )
7 user got the ans 
8 connection got cut off 

again the cycle will restart 
and user can build notes accordingly 

### to run the project 
```
npm run dev
```

```
npm convex dev
```

#### enter your variable key 


```` 
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:name # team: team-name , project: project name 

NEXT_PUBLIC_CONVEX_URL= convexurl

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= clerk auth key
CLERK_SECRET_KEY= clerk secret key 

NEXT_PUBLIC_CLERK_SIGN_In_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
````