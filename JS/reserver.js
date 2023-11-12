

nbReservations = 0
prixTotal = 0

function update () {
    document.getElementById("nb_reservations").textContent = nbReservations
    document.getElementById("prix_total").textContent = prixTotal
}
update()


document.getElementById("coche1").addEventListener("click", () => {
    nbReservations++
    prixTotal += 25
    update()
})
document.getElementById("coche2").addEventListener("click", () => {
    nbReservations++
    prixTotal += 15
    update()
})
document.getElementById("coche3").addEventListener("click", () => {
    nbReservations++
    prixTotal += 20
    update()
})
document.getElementById("coche4").addEventListener("click", () => {
    nbReservations++
    prixTotal += 25
    update()
})


document.querySelector("button").addEventListener("click", () => {
    alert ("Commande passée avec succès. \n Total : " + prixTotal + "€")

    nbReservations = 0
    prixTotal = 0
    update()
})