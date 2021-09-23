$('#residential').on('click', function () {
    // Show apartment field
    $('#input-title').removeClass('hidden');
    $('#input-title').addClass('display');
    // Show apartment field
    $('#number-of-apartments').removeClass('hidden');
    $('#number-of-apartments').addClass('display');
    // Show floors field
    $('#number-of-floors').removeClass('hidden');
    $('#number-of-floors').addClass('display');
    // Show basements field
    $('#number-of-basements').removeClass('hidden');
    $('#number-of-basements').addClass('display');
    // Hide Parking Spaces
    $('#number-of-parking-spots').removeClass('display');
    $('#number-of-parking-spots').addClass('hidden');
    // Hide Companies(businesses) field
    $('#number-of-companies').removeClass('display');
    $('#number-of-companies').addClass('hidden');
    // Hide Separate tenant companies field
    $('#number-of-corporations').removeClass('display');
    $('#number-of-corporations').addClass('hidden');
    // Hide maximum number of occupants per floor
    $('#maximum-occupancy').removeClass('display');
    $('#maximum-occupancy').addClass('hidden');
    // Hide number of hours of activity
    $('#business-hours').removeClass('display');
    $('#business-hours').addClass('hidden');
    // Hide number of elevator cages to be deployed
    $('#number-of-elevators').removeClass('display');
    $('#number-of-elevators').addClass('hidden');
    // Show selection button services
    $('#selection-services-button').removeClass('hidden');
    $('#selection-services-button').addClass('display');
})


$('#commercial').on('click', function () {
    // Hide apartment field
    $('#number-of-apartments').removeClass('display');
    $('#number-of-apartments').addClass('hidden');
    // Show floors field
    $('#number-of-floors').removeClass('hidden');
    $('#number-of-floors').addClass('display');
    // Show basements field
    $('#number-of-basements').removeClass('hidden');
    $('#number-of-basements').addClass('display');
    // Show Parking Spaces
    $('#number-of-parking-spots').removeClass('hidden');
    $('#number-of-parking-spots').addClass('display');
    // Show Companies(businesses) field
    $('#number-of-companies').removeClass('hidden');
    $('#number-of-companies').addClass('display');
    // Hide Separate tenant companies field
    $('#number-of-corporations').removeClass('display');
    $('#number-of-corporations').addClass('hidden');
    // Hide maximum number of occupants per floor
    $('#maximum-occupancy').removeClass('display');
    $('#maximum-occupancy').addClass('hidden');
    // Hide number of hours of activity
    $('#business-hours').removeClass('display');
    $('#business-hours').addClass('hidden');
    // Show number of elevator cages to be deployed
    $('#number-of-elevators').removeClass('hidden');
    $('#number-of-elevators').addClass('display');
    // Show selection button services
    $('#selection-services-button').removeClass('hidden');
    $('#selection-services-button').addClass('display');
})

$('#corporate').on('click', function () {
    // Hide apartment field
    $('#number-of-apartments').removeClass('display');
    $('#number-of-apartments').addClass('hidden');
    // Show floors field
    $('#number-of-floors').removeClass('hidden');
    $('#number-of-floors').addClass('display');
    // Show basements field
    $('#number-of-basements').removeClass('hidden');
    $('#number-of-basements').addClass('display');
    // Show Parking Spaces
    $('#number-of-parking-spots').removeClass('hidden');
    $('#number-of-parking-spots').addClass('display');
    // Hide Companies(businesses) field
    $('#number-of-companies').removeClass('display');
    $('#number-of-companies').addClass('hidden');
    // Show Separate tenant companies field
    $('#number-of-corporations').removeClass('hidden');
    $('#number-of-corporations').addClass('display');
    // Show maximum number of occupants per floor
    $('#maximum-occupancy').removeClass('hidden');
    $('#maximum-occupancy').addClass('display');
    // Hide number of hours of activity
    $('#business-hours').removeClass('display');
    $('#business-hours').addClass('hidden');
    // Hide number of elevator cages to be deployed
    $('#number-of-elevators').removeClass('display');
    $('#number-of-elevators').addClass('hidden');
    // Show selection button services
    $('#selection-services-button').removeClass('hidden');
    $('#selection-services-button').addClass('display');
})

$('#hybrid').on('click', function () {
    // Hide apartment field
    $('#number-of-apartments').removeClass('display');
    $('#number-of-apartments').addClass('hidden');
    // Show floors field
    $('#number-of-floors').removeClass('hidden');
    $('#number-of-floors').addClass('display');
    // Show basements field
    $('#number-of-basements').removeClass('hidden');
    $('#number-of-basements').addClass('display');
    // Show Parking Spaces
    $('#number-of-parking-spots').removeClass('hidden');
    $('#number-of-parking-spots').addClass('display');
    // Show Companies(businesses) field
    $('#number-of-companies').removeClass('hidden');
    $('#number-of-companies').addClass('display');
    // Hide Separate tenant companies field
    $('#number-of-corporations').removeClass('display');
    $('#number-of-corporations').addClass('hidden');
    // Show maximum number of occupants per floor
    $('#maximum-occupancy').removeClass('hidden');
    $('#maximum-occupancy').addClass('display');
    // Show number of hours of activity
    $('#business-hours').removeClass('hidden');
    $('#business-hours').addClass('display');
    // Hide number of elevator cages to be deployed
    $('#number-of-elevators').removeClass('display');
    $('#number-of-elevators').addClass('hidden');
    // Show selection button services
    $('#selection-services-button').removeClass('hidden');
    $('#selection-services-button').addClass('display');
})

// Store Input fields into variables
const numApartmentsInput = document.getElementById('number-of-apartments').value;
const numFloorsInput = document.getElementById('number-of-floors').value;
const numBasementsInput = document.getElementById('number-of-basements');
const numParkingSpotsInput = document.getElementById('number-of-parking-spots');
const numCompaniesInput = document.getElementById('number-of-companies');
const numCorporationsInput = document.getElementById('number-of-corporations');
const numOccupancyInput = document.getElementById('maximum-occupancy');
const numBusinessHoursInput = document.getElementById('business-hours');
const numElevatorsInput = document.getElementById('number-of-elevators');
