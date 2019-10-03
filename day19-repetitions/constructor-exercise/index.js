

document.addEventListener('DOMContentLoaded', () => {
  
  const todo1 = new Todo(
    'Prepare the hackathon',
    'Bootcamp',
    'really not done yet',
  );

  const todo2 = new Todo(
    'Finish economics chapter 1',
    'School',
    'pendings', 
  );
  
  const todo3 = new Todo(
    'Start an essay on AI machines',
    'School',
    'pending',
  );
  const todo4 = new Todo(
    'Fix broken git repo',
    'Work',
    'pending',
  );
  const todo5 = new Todo(
    'Presentation of the new version',
    'Work',
    'done',
  );
  const todo6 = new Todo(
    'Buy gift for grilfriend',
    'Social',
    'pending',
  );
  const todo7 = new Todo(
    'Call grandpa',
    'Social',
    'not done',
  );

  document.querySelector('.container');
  todo1.mount(container);
  todo2.mount(container);
  todo3.mount(container);
  todo4.mount(container);
  todo5.mount(container);
  todo6.mount(container);
  todo7.mount(container);
});
