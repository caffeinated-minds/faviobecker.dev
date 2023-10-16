package main

import (
	"log"
	"net/http"
)

func main() {
	fileServer := http.FileServer(http.Dir("../static")) // not sure why it breaks if I don't specify the Dir in this form?

	http.Handle("/index/", http.StripPrefix("/index/", fileServer))
	
	http.Handle("/contact/", http.StripPrefix("/contact/", fileServer))

	// I want to figure this out more. Want to route "/" to serve index and move along.

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	http.ServeFile(w, r, "../static/index.html")
	// })
	
	// doesn't work. Server needs to be called on "localhost:8080/index" to work at the moment.


	log.Println("Starting server on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}