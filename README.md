#Job Tracker Application - Dashboard

It is Job Application Tracking System, It is design by following Figma File instructions. There are Categories section for All, Interview and Rejected Tabs where provide Real-time statistics.

#Project Overview
This is focuses on DOM manipulation, Event handling, and Dynamic User-Interface using JavaScript and Tailwindcss. User Can see their interactive activities on different tabs by click action.

#Key Features
    *Dynamic Dashboard: Real-time counter for Total, Interview and Rejected Applications.
    *Tab System: Filters jobs are show in (All, Interview and Rejected) Tabs.
    *Responsiveness: Try to make Responsive layout
    *Delete Functionality: There are option to delete and auto count system.
    *Blank State Manage: If there is no filter data then show emty card

#Technologies Used:
    *HTmL
    *TailwindCSS by using (cdn)
    *Vanilla Js
    *FontAwsome (icons)

#The Questions Answer here:
##1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:-getElementById is used for select particular Id of HTML elements and it also work fast.
    -getElementsByClassName, it is indicate same class from all element and Return HTMLCollection.
    -querySelector is used like CSS Style selector and and it matched beging element.
    -querySelectorAll, it is very flexible for all selcetor like .class, #id, div, >, p

##2. How do you create and insert a new element into the DOM?
Ans: - First of all, I have to use document.createElement('div') then set there are innerText or innerHTML and at the end appendChild() method should be use.

##3. What is Event Bubbling? And how does it work?
Ans - Event Bubbling is JavaScript DOM behaviour, where by click event addressing cronologically raise up from child to parent to grandparent then document. look like Child → Parent → Grandparent → document

##4. What is Event Delegation in JavaScript? Why is it useful?
Ans: - It is a Technic of JavaScript that is can be easily identify parent element. It is useful beacuse it is faster than other event and make code short and clean.

##5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: - PreventDefault() used for a element's default behaviour stoped and the other hand stopPropagation()  used for Event bubbling can be stop.


###How to Run The application
1. Just Clone or Download the repository 
2. Open index.html in a browser
3. Run the app