(function () {
    let DB;

    document.addEventListener("DOMContentLoaded", () => {
        crearDB();
    })

    // Crear la base de datos de IndexDb
    function crearDB() {
        let crearDB = window.indexedDB.open("crm", 1)

        crearDB.onerror = () => {
            console.error("Ha ocurrido algo lo siento...")
        }

        crearDB.onsuccess = () => {
            console.log("Base de datos creada correctamente")
            DB = crearDB.result;
        }
        crearDB.onupgradeneeded = (e) => {
            const db = e.target.result;
            const objectStore = db.createObjectStore("crm", { keyPath: "id", autoIncrement: true });
            objectStore.createIndex("nombre", "nombre", { unique: false })
            objectStore.createIndex("email", "email", { unique: true })
            objectStore.createIndex("telefono", "telefono", { unique: false })
            objectStore.createIndex("empresa", "empresa", { unique: false })
            objectStore.createIndex("id", "id", { unique: true })
            console.log("DB lista y creada")
        }


    }


})();