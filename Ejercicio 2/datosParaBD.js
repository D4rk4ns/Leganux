let nombres = ["Esmeralda Bonilla","Esteban Correa Bastida","Nazaret Moles Balaguer","Emilia Rozas Robledo","Roque Salvador Llorens","Nico Girona Arce","Marcos Pedrosa-Abril","Ariadna Hierro Soto","Beatriz Alvarez Aragón","Azucena Almansa Bas","Isidoro Campillo Pelayo","Sol Peñas","Xavier Gual","Andrea Bonilla-Checa","Ramiro Abascal Cid","Gisela Berenguer","Marciano Rebollo Abella","Zoraida Prats Arranz","Almudena Blazquez Solano","Andrés Verdejo-Guardia","Porfirio Ordóñez Hernandez","Teodosio Espinosa","Abraham Prat Heras","María Fernanda Solé","Rosario Cardona Vilanova","Maximino de Losada","Simón Garzón Enríquez","Teófilo Alsina","Roxana Chacón Cortes","Víctor Peral Coll","Marta Navarrete Reyes","Ramona Santos","Pili Peña-Espejo","Lucila Prats Albero","Wilfredo Jose Antonio Peral Grande","Saturnina Ibáñez Hurtado","Ligia Carballo-Rincón","Jose Ramón Teófilo Menéndez Corral","Patricio Angulo Benito","Narcisa Catalán Carbonell","Ramón Lasa Acedo","Tadeo Baquero Marí","Julio Sanchez Garmendia","Ulises Badía Requena","Pepe Bernat Pineda","Abigaíl Peláez Infante","Saturnino Pánfilo Matas Cruz","Olivia Bosch Albero","Gerardo Garzón Iglesia","Emperatriz Herrero Acero","Lope del Soriano","Cebrián del Cruz","Elba Roma Garay","Leyre Giralt","Amílcar Zorrilla Maza","Isaac de Arregui","Melania Vázquez Ródenas","Cristian del Riquelme","Marcelo Millán","Valentina Pinedo","María Fernanda Diéguez Carlos","Desiderio Hidalgo Arellano","Isidora Herrero Cabezas","Herminio Armengol Olmo","Camilo Huertas-Roldan","Luna del Tur","María Del Carmen del Morell","Octavia Bustamante Oliver","Fulgencio Iborra Gibert","Domitila Selena Domínguez Losa","Eladio Navarro Gisbert","Berta Chaparro Donoso","Casandra Tejedor Moliner","Íñigo Velasco Francisco","Regina Peñalver Vigil","Ale Lozano Menendez","Azucena Domínguez Gracia","Adrián Benavente-Gilabert","Apolinar Grande Recio","Begoña Gomez Serra","Paulino Rafa Gallart Busquets","Ramona Lopez Maestre","Aitor Mayoral Enríquez","Maxi Estevez Márquez","Loreto Aliaga Benavides","Dominga Santiago Cabanillas","Carlito de Herranz","Víctor Corominas Rebollo","Fortunato Rosell Fabra","Quirino Lorenzo Prat","Gema Barceló Bautista","Modesta Dávila","Águeda Ariza Collado","Macarena Peinado-Torres","Mauricio Manso","Fulgencio Saura Abad","Daniel Bastida","Cristóbal Sanjuan Viña","Matilde Torralba Criado","Jose Miguel Feliu Díaz"];


const   mongoose = require('./database'),
        database = require('./database.js'),
        Student  = require('./backend/models/student');
        ClassRoom  = require('./backend/models/classroom');

    for(let i=0; i<30; i++){
        let student = new Student({
            name          : nombres[i],
            age      : Math.floor((Math.random() * (100 - 10 + 1)) + 10)
        });

        student.save().then(res =>{
            
        });
    }

    for(let i=0; i<30; i++){
        let classroom = new ClassRoom({
            Class          : Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000),
            Order      : Math.floor((Math.random() * (1000 - 10 + 1)) + 10),
            numberOfStudents: Math.floor((Math.random() * (100 - 10 + 1)) + 10),
        });

        classroom.save().then(res =>{
            
        });
        
    }
