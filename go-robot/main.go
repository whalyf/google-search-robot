package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
	"time"
)

func main() {
	http.HandleFunc("/process", handleProcessRequest)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleProcessRequest(w http.ResponseWriter, r *http.Request) {
	var searchParams map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&searchParams)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Processa os dados recebidos do NestJS no próprio robô
	processedResults := processNestJSData(searchParams)

	// Retorna os resultados processados ao NestJS
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(processedResults)
}

func processNestJSData(searchParams map[string]interface{}) map[string]interface{} {
	// Processa os dados recebidos do NestJS no próprio robô
	// Neste exemplo, convertemos as keywords para maiúsculas e adicionamos a data e hora atual
	return map[string]interface{}{
		
		"location":  searchParams["location"],
		"frequency": searchParams["frequency"],
		"keywords":  toUpperCase(searchParams["keywords"].(string)),
		"dateTime":  time.Now().Format(time.RFC3339),
		"searchId": searchParams["searchId"],
	}
}

func toUpperCase(s string) string {
	return strings.ToUpper(s)
}
