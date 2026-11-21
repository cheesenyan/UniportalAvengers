'use strict';
// Fictional content and navigation for the campus-services demonstration.
window.UniPortalSections = (() => {
  const groups = [
    {id:'classes',icon:'▤',label:'Class Information',items:[['browse-classes','Browse Classes'],['course-catalog','Course Catalog'],['class-search','Class Search']]},
    {id:'schedule',icon:'◷',label:'Schedule',items:[['schedule','Schedule']]},
    {id:'enrollment',icon:'▣',label:'Enrollment',items:[['planner','Planner'],['shopping-cart','Shopping Cart'],['edit-enrollment','Edit Enrollment'],['drop-classes','Drop Classes'],['wait-list','View Wait List'],['enrollment-dates','Enrollment Dates'],['swap-classes','Swap Classes'],['schedule-builder','Schedule Builder']]},
    {id:'academics',icon:'▧',label:'Academics',items:[['programs','Programs'],['test-scores','Test Scores'],['degree-progress','Degree Progress'],['requirements','My Academic Requirements'],['what-if','What-If'],['course-list','Course List'],['transcript-request','Request Transcript'],['milestones','Student Milestones'],['graduation','Apply for/View Graduation'],['unofficial-transcript','View Unofficial Transcript'],['grades','Grades'],['advisor','Advisor Information'],['advising-notes','Advising Notes'],['transfer-credit','Transfer Credit'],['awards','Honors and Awards']]},
    {id:'financials',icon:'▭',label:'Financials',items:[['balance','What I Owe'],['account-activity','Account Activity'],['financial-aid','View Financial Aid'],['payment-plans','Payment Plans']]},
    {id:'information',icon:'ⓘ',label:'My Information',items:[['todos','To Dos'],['tasks','Tasks'],['holds','Holds'],['notifications','Notifications'],['messages','Message Center']]},
    {id:'profile',icon:'♙',label:'My Profile',items:[['general-info','General Information'],['biographical','Biographical Information'],['contact','Contact Info'],['emergency','Emergency Contacts']]},
    {id:'forms',icon:'▱',label:'Student Forms',items:[['student-forms','Student Forms']]},
    {id:'full-site',icon:'▣',label:'Full Site',items:[['full-site','Full Site']]}
  ];
  const entries=groups.flatMap(group=>group.items.map(([id,title])=>({id,title,group:group.id})));
  const find=id=>entries.find(entry=>entry.id===id);
  const homeCard=(title,body)=>`<section class="widget"><h3>${title}</h3><div class="widget-body">${body}</div></section>`;
  const table=(headers,rows)=>`<div class="table-wrap"><table class="course-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const term='<label class="visually-hidden" for="viewTerm">Term</label><select id="viewTerm" class="term"><option>2027 Spring Term</option></select>';
  const fakeCourses=[['MATH 206','Probability and Statistics','MoWe','10:00–11:15 am','Open'],['COMP 201','Introduction to Programming','TuTh','2:00–3:15 pm','Open'],['ENV 202','Climate and Society','MoWe','9:00–10:15 am','Closed']];
  function scheduleRows(store){const rows=[['HUM 101','Foundations of Humanities','MoWe','10:00–11:15 am','Enrolled']];if(store.getItem('enrolledCourse')==='COMP 201')rows.push(['COMP 201','Introduction to Programming','TuTh','2:00–3:15 pm','Enrolled']);return rows;}
  function view(id,store){
    const entry=find(id);if(!entry)return null;
    const controls=`<div class="toolbar">${term}<span class="subtle">Fictional student services · Demo data</span></div>`;
    let body='';
    if(['schedule','schedule-builder'].includes(id)){
      body=`${controls}<div class="heading-row section-heading"><div><h2>${entry.title}</h2><p class="subtle">Your classes for the selected term</p></div><div class="toolbar-actions"><button class="btn secondary" id="listView" aria-pressed="true">List View</button><button class="btn secondary" id="calendarView" aria-pressed="false">Calendar View</button></div></div><div id="scheduleContent">${table(['CLASS','DESCRIPTION','DAYS','TIME','STATUS'],scheduleRows(store))}</div>`;
    } else if(['browse-classes','course-catalog','class-search','course-list'].includes(id)){
      body=`${controls}<div class="heading-row section-heading"><div><h2>${entry.title}</h2><p class="subtle">Explore classes and academic offerings.</p></div><button class="btn" data-open-section="shopping-cart">Open Shopping Cart</button></div><label class="visually-hidden" for="sectionSearch">Search courses</label><input id="sectionSearch" class="search" placeholder="Search by course or title">${table(['CLASS','DESCRIPTION','DAYS','TIME','STATUS'],fakeCourses)}`;
    } else if(['planner','edit-enrollment','drop-classes','swap-classes','wait-list','enrollment-dates'].includes(id)){
      const descriptions={'planner':'Review the classes you are considering for a future term.','edit-enrollment':'Review your enrolled classes and their details.','drop-classes':'Review classes that may be dropped.','swap-classes':'Review your current classes before requesting a swap.','wait-list':'There are no classes on your wait list.','enrollment-dates':'Enrollment appointment: 9:00 am on January 4, 2027.'};
      body=`${controls}<div class="heading-row section-heading"><div><h2>${entry.title}</h2><p class="subtle">${descriptions[id]}</p></div><button class="btn" data-open-section="shopping-cart">Shopping Cart</button></div>${id==='wait-list'||id==='enrollment-dates'?homeCard(entry.title,descriptions[id]):table(['CLASS','DESCRIPTION','DAYS','TIME','STATUS'],scheduleRows(store))}`;
    } else {
      const content={
        'programs':['Academic program','Bachelor of Arts and Sciences · Active'], 'test-scores':['Test scores','No test scores are available.'], 'degree-progress':['Degree overview','12 of 32 fictional credits completed.'], 'requirements':['Academic requirements','General education: In progress · Major requirements: Not declared'], 'what-if':['What-If report','Select a program to preview its requirements.'], 'transcript-request':['Transcript request','Request status: No requests submitted.'], 'milestones':['Milestones','No milestones are currently recorded.'], 'graduation':['Graduation','There are no active graduation applications.'], 'unofficial-transcript':['Academic record','2027 Spring Term · HUM 101 · Enrolled'], 'grades':['Grades','No grades have been posted for this term.'], 'advisor':['Academic advisor','Morgan Ellis · Academic Advising Office'], 'advising-notes':['Advising notes','No advising notes are available.'], 'transfer-credit':['Transfer credit','No transfer credit has been recorded.'], 'awards':['Honors and awards','No awards are currently recorded.'],
        'balance':['Account balance','$0.00 · No payment is due.'], 'account-activity':['Recent account activity','There is no account activity for this term.'], 'financial-aid':['Financial aid','No financial aid information is available for this demo.'], 'payment-plans':['Payment plans','No payment plan is active.'],
        'todos':['To Dos','Review the updated student services policy.'], 'tasks':['Tasks','There are no outstanding tasks.'], 'holds':['Holds','There are no active holds.'], 'notifications':['Notifications','Please review the latest administrative notice.'], 'messages':['Message center','You have no messages.'],
        'general-info':['Student profile','Demo Student · Undergraduate · Active'], 'biographical':['Biographical information','This demo uses fictional student information.'], 'contact':['Contact information','No contact information is stored in this demo.'], 'emergency':['Emergency contacts','No emergency contacts are stored in this demo.'],
        'student-forms':['Student forms','Enrollment verification request · Academic record request'], 'full-site':['Student services','Browse academic, financial, enrollment and profile services from the navigation menu.']
      };
      const [heading,detail]=content[id]||[entry.title,'There are no records to display.'];
      body=`<div class="heading-row section-heading"><div><h2>${entry.title}</h2><p class="subtle">Student services · 2027 Spring Term</p></div></div><div class="dashboard-grid"><div class="column">${homeCard(heading,detail)}</div><div class="column">${homeCard('Information','Information shown on this page is fictional and only available in this demonstration.')}</div></div>`;
    }
    return {entry,body};
  }
  function attach(id,store){
    const search=document.getElementById('sectionSearch');if(search)search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.course-table tbody tr').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));});
    const list=document.getElementById('listView'),calendar=document.getElementById('calendarView');if(list&&calendar){const content=document.getElementById('scheduleContent');list.onclick=()=>{list.setAttribute('aria-pressed','true');calendar.setAttribute('aria-pressed','false');content.innerHTML=table(['CLASS','DESCRIPTION','DAYS','TIME','STATUS'],scheduleRows(store));};calendar.onclick=()=>{list.setAttribute('aria-pressed','false');calendar.setAttribute('aria-pressed','true');const rows=scheduleRows(store);content.innerHTML=`<div class="calendar-grid"><div class="calendar-time">TIME</div>${['MON','TUE','WED','THU','FRI'].map(d=>`<div class="calendar-day">${d}</div>`).join('')}<div class="calendar-time">10:00 am</div><div class="calendar-event">HUM 101<br><small>10:00–11:15</small></div><div></div><div class="calendar-event">HUM 101<br><small>10:00–11:15</small></div><div></div><div></div><div class="calendar-time">2:00 pm</div><div></div><div>${rows.length>1?'<div class="calendar-event">COMP 201<br><small>2:00–3:15</small></div>':''}</div><div></div><div>${rows.length>1?'<div class="calendar-event">COMP 201<br><small>2:00–3:15</small></div>':''}</div><div></div></div>`;};}
  }
  return {groups,find,view,attach};
})();
