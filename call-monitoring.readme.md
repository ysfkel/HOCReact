# Property Recommendation
[FEATURE DETAILS AVAILABLE ON VSTS](https://gulfnews.visualstudio.com/_search?text=call%20monitoring&type=workitem&lp=custom-Collection)
This Feature provides a user facility to retrieve, listen and download call logs.

## URL
* stating: https://stg.getthat.com/call-logs/#/list

* production: https://getthat.com/call-logs/#/list

* Consists a single page / component which tables a table containing the call logs of the logged in user. The user can perform the following operations
 * Seach
 * Download
 * Play 
 call logs


 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. 

### Prerequisites

   The following packages will be needed to be installed on your computer inorder to run this project locally.


[React](https://github.com/facebook/react) Frontend framework.
[Typescript](https://www.typescriptlang.org/) - Typed superset of javascript.
[Material UI](https://material-ui.com/) - React components that implement google material ui.
[Redux](https://github.com/reduxjs/redux).
[React Redux](https://github.com/reduxjs/react-redux)
[Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware.
[Redux dev tools Extension](https://www.npmjs.com/package/redux-devtools-extension) - A live-editing time travel environment for redux.

### Installing

```
git clone https://gulfnews.visualstudio.com/Getthat-VSTS/_git/getThat-Frontend
```

cd into the folder install dependencies by running the following

```
npm install
```

start the local host by running

```
 npm start
```

## Project Description
 
 ### Folder Structure
  Files are grouped according to feature, Inorder to define a scalable folder structure. 
     
  #### Call monitoring
     |
     |____agents
     |              
     |____components
     |            
     |____common
     |
     |____resources
     |
     |___Other files

  #### Components 
     |
     |___agents
     |
     |___call-monitoring
     |
     |___common
  
  #### agents
     |
     |___repository
     |	
     |___State-manager
     |
     |___types
  
  ####  call-monitoring

     consists of components and other resources that work together to render 
     the interface that displays the user's call logs

    call-monitoring
    |
    |___components
    |
    |___helpers
    |
    |___models
    |
    |___repository
    |
    |___state-manager
    |
    |___types

  ####  Call-monitoring > components

    Consists of components that make up the call logs ur

    call-monitoring components
    |
    |___call-count
    |
    |___call-list
    |
    |___call-monitor
    |
    |___call-count
    |
    |___call-search
    |
    |___filter-controller
    |
    |___pager


  #### Conversation Components
    |
    |___amenity
    |
    |__break-point
    |
    |___furnishing
    |
    |___nearBy
    |
    |___number-of-bedroom
    |
    |___ownershi-type
    |
    |___property-type
    |
    |___special-care
    |
    |___travel-time

 


## Description.
 When the view loads. The application makes a rest call to a getthat rest end point to retreive a list of agents. This list of agents is then looped over (At this point, knowlarity does not provide a feature to accept an array of numbers) , each loop makes 
 a rest call using the agents [knolarity](https://www.knowlarity.com/) number as paramter to fetch the agents call logs. when all call logs have been recieved for all
 agents. the list of call logs is dispatched and rendered on the UI.

## Types

#### AgentType: Defines the Agent type 

    interface AgentType {
        licenseNo: string;
        agentID: string;
        languages: Array<string>;
        areasOfExpertise: Array<string>;
        mobile: string;
        description: string;
        isAgentRent: boolean;
        createdOn: string;
        userID: string;
        endDateTs: number;
        startDateTs: number;
        lastUpdated: string;
        listings: number;
        nationality: string;
        name: string;
        isAgentSale: true;
        isFeatured: number;
        priceRange: string;
        email: string; 
        virtualPhoneNumber:string;
    }

    interface AgencyInfo{
        first_name: string;
        last_name: string;
        mobile: string;
        role: string
        virtualPhoneNumber: string;
    }
  
   interface Agency {
      agencyInfo: AgencyInfo;
      agents: Array<AgentType>;
      role: string;
      isBROKER_CRM: boolean;
   }





#### CallLogType
  Defines calllog response

  interface CallLogType {
        uuid: string;
        customer_number: string;
        agent_number: string;
        call_duration: number;
        business_call_type: string;
        destination: string;
        id: number;
        call_type: number;
        call_recording: string;
        order_id: number;
        knowlarity_number: string;
        start_time: string;
        timezone_offset: string; 
        agentName: string;
  }

  interface GetCallLogParamType {
        call_type: string;
        agent_number: string;
        knowlarity_number: string;
        start_time: Date;
        end_time: Date;
        business_call_type: string;
        customer_number: string;
        limit: number;
  }




## Authors

* **DMU GULGNEWS** 

