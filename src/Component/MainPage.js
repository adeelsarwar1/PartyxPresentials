import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./Home";
import Page from "./Page";
import Review from "./Review";
import MyComponent from "./Whoweare";
import ContactUs from "./ContactUs";
function MainPage() {
  return (
    <div>
    
      <Layout>
        <Home />
        <Page />
        <Review />
        <MyComponent />
        <ContactUs />
      </Layout>
    </div>
  );
}

export default MainPage;