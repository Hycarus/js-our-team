"use strict";
(function (){
    const btn = document.getElementById('invia');
    const btnReset = document.getElementById('reset');
    const wrapper = document.getElementById('wrapper');
    const input = document.getElementById('input');
    const rowEl = document.querySelector('.row')
    
    const teamMember = [
        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            picture: '../img/wayne-barnett-founder-ceo.jpg',
        },
        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            picture: '../img/angela-caroll-chief-editor.jpg',
        },
        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            picture: '../img/walter-gordon-office-manager.jpg',
        },
        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            picture: '../img/angela-lopez-social-media-manager.jpg',
        },
        {
            name: 'Scott Estrada',
            role: 'Developer',
            picture: '../img/scott-estrada-developer.jpg',
        },
        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            picture: '../img/barbara-ramos-graphic-designer.jpg',
        },
    ];
    for(const val in teamMember){
        printCol(teamMember[val]);
    }
    function printCol(teamMember) {
        const col = document.createElement("div");
        col.classList.add("col-4");
        const template = `
              <div class="card text-start">
                <img class="card-img-top" src="${teamMember.picture}" alt="Title">
                <div class="card-body">
                  <h4 class="card-title">${teamMember.name}</h4>
                  <p class="card-text">
                        Role: ${teamMember.role}
                  </p>
                  </div>
              </div>
          `;
          col.innerHTML = template;
      
          rowEl.append(col);
      }
}) ();


