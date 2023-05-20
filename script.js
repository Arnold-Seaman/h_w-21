// A:
/* const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
function func(emp) {  
    [name, surname, department, position, salary] = emp;
    console.log(name, surname, department, position, salary);
};
func(data); */

// B:
/* const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', 2000];
function func(emp) {  
    [name, surname, info] = emp;
    console.log(name, surname, info);
};
func(data); */

// C:
/* const data = ['Иван', 'Иванов', 'Отдел разработки'];
function func(emp) {  
    [name, surname, department, position = 'Junior'] = emp;
    console.log(name, surname, department, position);
};
func(data); */

// D:
/* const data = {
    color: 'red',
    width: '400',
    height: '500',
};
function func(options) {  
    const {color, width, height} = options;
    console.log(color, width, height);
};
func(data); */