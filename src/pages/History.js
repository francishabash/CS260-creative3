import React from 'react';


class History extends React.Component {
    render (){
        return (
        <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img class="navbar-brand" src="images/Palestine.png" width="50" height="50" />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Palestine<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="images.html">Images</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="history.html">History</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="people.html">People</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <h1 class="header">History</h1>
        
        <div class="photo">
          <img class="my-image" src="images/time-map.png"/>
        </div>
        
        <div class="container">
        <h3 class="name">Palestine’s Early Roots</h3>
        <p class="review">Scholars believe the name “Palestine” originally comes from the word “Philistia,” which refers to the Philistines who occupied part of the region in the 12th century B.C.</p>
        <p class="review">Throughout history, Palestine has been ruled by numerous groups, including the Assyrians, Babylonians, Persians, Greeks, Romans, Arabs, Fatimids, Seljuk Turks, Crusaders, Egyptians and Mamelukes.</p>
        <p class="review">From about 1517 to 1917, the Ottoman Empire ruled much of the region. When World War I ended in 1918, the British took control of Palestine. The League of Nations issued a British mandate for Palestine—a document that gave Britain administrative control over the region, and included provisions for establishing a Jewish national homeland in Palestine—which went into effect in 1923.</p>
        </div>
        
        <div class="container">
        <h3 class="name">The Partition of Palestine</h3>
        <p class="review">In 1947, after more than two decades of British rule, the United Nations proposed a plan to partition Palestine into two sections: an independent Jewish state and an independent Arab state. The city of Jerusalem, which was claimed as a capital by both Jews and Palestinian Arabs, was to be an international territory with a special status. </p>
        </div>
        
        <div class="container">
        <h3 class="name">Current State of Palestine</h3>
        <p class="review">Palestinians are still fighting for an official state that’s formally recognized by all countries.</p>
        <p class="review">Although Palestinians occupy key areas of land, including the West Bank and the Gaza Strip, some Israelis, with their government's blessing, continue to settle in areas that are generally agreed to be under Palestinian control. Many international rights groups consider such settlements illegal, the borders aren’t clearly defined, and persistent conflict continues to be the norm. A substantial proportion of Israelis also oppose the settlements and would prefer to find peaceful ways to resolve their land disputes with the Palestinians.</p>
        </div>
        </div>
        );
    }
}

export default History;