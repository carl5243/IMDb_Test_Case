# IMDb_Test_Case
IMDb Web Page automated/manual test case 

# Test Case descriptions:
The IMDb website is a network movie database contents service website, user can easily find any type of movie through it's category.
On my point of view, there have three main founction can be test to ensure matched user intention, thoses are：
1.Account creation & login function (IMDb_01.js)
2.Video Clips playback function (IMDb_02.js)
3.User intents query search function (IMDb_03.js)

# Account creation & login function (IMDb_01.js)
In this test case, we devides into two section, 
The first one is account login section, to ensure if an un-registerred user try to login account, the system shall prevent login and displayed "Alert" messages.
The second one is create new account for the website membership, but is the user provides the wrong information, the system shall displayed "alert" message to notice user.

inside the code, tester can change the text in type('xxxxxxx') 

# Video Clips playback function (IMDb_02.js)
In this test case, we test two video cilps section, they are  "IMDb Originals" video clips and "trailer" video clips.
The majority for the user to visite the site is to find the interesting movie and also want to preview some video clips via the playback function, if the playback fuction is not work, the user might get rids of use this website.

# User intents query search function (IMDb_03.js)
In this test case, we can type in the query terms in the search bar, and using the category function to test different category can correctly dispalyed the user intentions.
Inside the code, we use "Star Wars" as serach terms, tester can chage the text and values in it, but be sure all chang should matched on the same terms.   
