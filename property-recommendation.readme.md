# Property Recommendation
[FEATURE DETAILS AVAILABLE ON VSTS](https://gulfnews.visualstudio.com/_search?text=property%20recommendation&type=workitem&lp=custom-Collection)
This Feature provides a user an alternative for searching properties by presenting an interractive user interface designed to function like a chat application with predefined
questions and options to choose from.

## URL
* stating: https://stg.getthat.com/property-recommendation#/

* production: https://getthat.com/property-recommendation#/

Consists of three main views

  -  Landing: welcome page 
  -  Conversation : An interractive user interface which a behaves like a chat ui with predefined questions and options to collect user search criteria.
  -  search result: A user interface to display the search result, map view and list view.

 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. 

### Prerequisites

   The following packages will be needed to be installed on your computer inorder to run this project locally.


[React](https://github.com/facebook/react) Frontend framework.
[Typescript](https://www.typescriptlang.org/) - Typed superset of javascript.
[Material UI](https://material-ui.com/) - React components that implement google material ui.
[React CSSModules](https://github.com/gajus/react-css-modules) - 
CSS files in which all class names and animation names are scoped locally by default.
i.e  module bundler such as webpack to load CSS scoped to a particular document.

[React  Router v4](https://github.com/ReactTraining/react-router).
[Redux](https://github.com/reduxjs/redux).
[React Redux](https://github.com/reduxjs/react-redux)
[Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware.
[Redux dev tools Extension](https://www.npmjs.com/package/redux-devtools-extension) - A live-editing time travel environment for redux.

[Device Detect](https://github.com/duskload/react-device-detect) - Detect device and render view according to device type.

[Google maps](https://developers.google.com/maps/documentation/javascript/reference/)
[Leaflet](https://github.com/Leaflet/Leaflet) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.

[React leaflet](https://github.com/PaulLeCam/react-leaflet) -React-Leaflet provides an abstraction of leaflet as react components.

[React leaflet google](https://github.com/Charmatzis/react-leaflet-google) -  Google maps layer as React component for Leaflet build on top of React-Leaflet.

 
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
     
  #### Property Recommendation
     |
     |____assets
     |              
     |____common
     |            
     |____components
     |
     |____repo
     |
     |___Others

  #### Components 
     |
     |___app-bar
     |
     |___Conversation
     |
     |___Search-Result
     |
     |___Landing
  
  #### Conversation
     |
     |___Components
     |	
     |___State-manager
     |
     |___types
     |
     |___constants
  
  #### Conversation State manager

    The state manager consists of Action creators, middleware (redux thunk) , reducer and state

    State-manager
    |
    |___search-criteria
    |
    |___user
    |
    |___view

  #### Search criteria  (state manager)
    |
    |___action-creator   - 
    |
    |___action-creator.types
    |
    |___action.types
    |
    |___helpers
    |
    |___reducer
    |
    |___state


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

  ### Amenity
    |
    |___option
    |       |
    |       |___option.component
    |       |
    |       |___helper
    |       |
    |       |___constants
    |
    |
    |
    |___prompt
    |     |
    |     |___prompt.component
    |
    |
    |
    |___selected
            |
            |___selected.component

  #### Search Result Components
    |
    |___item-detail-summary
    |
    |___map
    |     |
    |     |___google-map-autocomplete.tsx
    |     |	
    |     |___map.component.tsx
    |     |
    |     |___places.autocomplete.tsx
    |
    |___result-filter
    |
    |___search-result-header
    |
    |___state-manager
    |
    |___search-result.container


## Description.
  The conversation view consists of sub components  each respresenting a search criteria. 
  each search criteria consists of 3 components.

  * prompt.component - Renders a prompt on the UI that queries the user to enter a search  criteria
  * option.component - renders ui elements that provide options for the user to select in response to the question contained in the prompt.component component.
  * Select.component - This component renders the users selected option.
  Prompt.component
 
  Each component can be in either of 3 states

  * editing : true or false  -  true if the component is in edit mode
  * selecting: true or false -  true if the component is in selecting mode
  * selected: true or false  -  true if the component is in selected mode

#### Editing mode
  This mode is enabled when the user clicks on his response to a question in order to change his / her choice. This action sets editing = true by dispatching an action to the redux store via the edit() action dispatcher.
  This action loads the options.component for the specified question in order for the user to select a different option

#### Selecting mode:
  This mode is enabled when the question is loaded for the first time in the conversation and the user has not yet made his / her selection. 
  When this attribute is set to true for a given question. The components options.component and promt.component for that question are rendered on the UI. When the user makes a selection this attribute is set to false to unload the options.component from the UI and load selected.component (which shows the users selection) into  the UI. 

#### Selected mode:
  This mode is enabled when the user has selected a choice in response to a question. This unloads the options.component of and loads the selected.component for a particular question in the conversation

#### View State 
  Used on the conversation components to manage the state of each conversation component
  i.e editting, selecting or selected.


## Types

#### ViewStateType: Defines the ViewState type 

  interface ViewStateType {
      editing :  boolean;   // true if the component is in edit mode
      selecting: boolean; // true if the component is in selecting mode
      selected: boolean; // true if the component is in selected mode
      name: string // name of component
  }

#### PropertyRecommendationViewStateType 
 This type consists of properties that represent each search criteria  component view  state and controls which search criteria component to render on the UI.

    interface PropertyRecommendationViewStateType {

          OwnershiptTypeViewState: ViewStateType;
          NearByViewStatet: ViewStateType;
          LocationViewState: ViewStateType;
          TravelTimeViewState: ViewStateType;
          TravelModeViewState: ViewStateType;
          NumberOfBedRoomViewState: ViewStateType;
          PropertyTypeViewState: ViewStateType;
          BudgetViewState: ViewStateType; 
          FurnishingViewState: ViewStateType; 
          SpecialCareViewState: ViewStateType;
          AmenityViewState:  ViewStateType;
          BreakPointViewState: ViewStateType
          Editting: EditStateType
          NextView: NextViewType
          CurrentView: CurrentViewType
          CurrentAppView: string
          CurrentResultView: string
          drawerState: boolean
    }

#### PropertyRecommendationCriteriaType
  This interface defines the search criteria state which stores the users selections from the search criteria View options.

    interface PropertyRecommendationCriteriaType {
        ownershipType: string
        nearby: string
        location: LocationType 
        travelTime: number
        travelMode: string
        numberOfBedRoom: number | null
        propertyTypes: Array<string>
        budget: number | null
        furnishing: string
        specialCare: string
        amenities: Array<string>
    }

#### PropertyType
   Defines interface for property to be retrieved from search

    interface PropertyType {
        imagesProcessed: boolean;
        amenities: string[];
        offeringType: string;
        city: string;
        advID: string;
        description: string;
        advType: string;
        title: string;
        blueFlag: boolean;
        createdOn: Date;
        expiryDate: number;
        geoPoints: string;
        lastUpdated: Date;
        serviceCharge: number;
        furnished: string;
        referenceNumber: string;
        propertyType: string;
        _geoloc: Geoloc;
        plotSize: number;
        propertyCategory: string;
        bathroom: string;
        adVertical: string;
        propertyAgent: PropertyAgent;
        sizeUnits: string;
        images: Image[];
        rentalPeriod: string;
        greyFlag: boolean;
        imagesForApproval: any[];
        community: string;
        boostDT: Date;
        subCommunity: string;
        bedroom: number;
        advStatus: string;
        permitNumber: string;
        priceCurrency: string;
        advRefID: string;
        fromTrustedPartner: boolean;
        lastUpdate: string;
        cheques: number;
        sellerType: string;
        boostTS: number;
        toBePublished: boolean;
        status: string;
        ownerID: string;
        priceAsText: string;
        sizeAsText: string;
        createdOnTS: number;
        isVisible: boolean;
        modQueueTopic: string;
        price: number;
        size: number;
        objectID: string;
    }


## Authors

* **DMU GULGNEWS** 

