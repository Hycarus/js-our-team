"use strict";
(function (){
    const btn = document.getElementById('invia');
    const rowEl = document.querySelector('.row')
    
    const teamMember = [
        {
            name: 'Wayne Barnett',
            role: 'Founder & CEO',
            picture: 'wayne-barnett-founder-ceo.jpg',
        },
        {
            name: 'Angela Caroll',
            role: 'Chief Editor',
            picture: 'angela-caroll-chief-editor.jpg',
        },
        {
            name: 'Walter Gordon',
            role: 'Office Manager',
            picture: 'walter-gordon-office-manager.jpg',
        },
        {
            name: 'Angela Lopez',
            role: 'Social Media Manager',
            picture: 'angela-lopez-social-media-manager.jpg',
        },
        {
            name: 'Scott Estrada',
            role: 'Developer',
            picture: 'scott-estrada-developer.jpg',
        },
        {
            name: 'Barbara Ramos',
            role: 'Graphic Designer',
            picture: 'barbara-ramos-graphic-designer.jpg',
        },
    ];
    for(const val in teamMember){
        printCol(teamMember[val]);
    }
    function printCol(teamMember) {
        const col = document.createElement("div");
        col.classList.add("col-4");
        const template = `
              <div class="card text-center m-3">
                <img class="card-img-top" src="img/${teamMember.picture}" alt="Title">
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

    btn.addEventListener('click', function(){
        const newMember = {
            name: document.getElementById('name').value,
            role: document.getElementById('role').value,
            picture: document.getElementById('picture').value,
        }
        teamMember.push(newMember);
        printCol(newMember);
        reset();
    })

    function reset(){
        document.getElementById('name').value = '';
        document.getElementById('role').value = '';
        document.getElementById('picture').value= '';
    }
}) ();


