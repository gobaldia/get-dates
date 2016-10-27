var chrono = require('chrono-node');

exports.date = function(text) {
	var aux = numeriza(text);
	return chrono.parseDate(aux);
}

function numeriza(text) {
	text = text.replace(/dos mil veinte/g, '2020');
	text = text.replace(/dos mil diecinueve/g, '2019');
	text = text.replace(/dos mil dieciocho/g, '2018');
	text = text.replace(/dos mil diecisiete/g, '2017');
	text = text.replace(/dos mil dieciseis/g, '2016');
	text = text.replace(/dos mil quince/g, '2015');
	text = text.replace(/dos mil catorce/g, '2014');
	text = text.replace(/dos mil trece/g, '2013');
	text = text.replace(/dos mil doce/g, '2012');
	text = text.replace(/dos mil once/g, '2011');
	text = text.replace(/dos mil diez/g, '2010');
	text = text.replace(/dos mil nueve/g, '2009');
	text = text.replace(/dos mil ocho/g, '2008');
	text = text.replace(/dos mil siete/g, '2007');
	text = text.replace(/dos mil seis/g, '2006');
	text = text.replace(/dos mil cinco/g, '2005');
	text = text.replace(/dos mil cuatro/g, '2004');
	text = text.replace(/dos mil tres/g, '2003');
	text = text.replace(/dos mil dos/g, '2002');
	text = text.replace(/dos mil uno/g, '2001');
	text = text.replace(/dos mil/g, '2000');
	text = text.replace(/uno/g, '1');
	text = text.replace(/dos/g, '1');
	text = text.replace(/tres/g, '1');
	text = text.replace(/cuatro/g, '1');
	text = text.replace(/cinco/g, '1');
	text = text.replace(/seis/g, '1');
	text = text.replace(/siete/g, '1');
	text = text.replace(/ocho/g, '1');
	text = text.replace(/nueve/g, '1');
	text = text.replace(/diez/g, '1');
	text = text.replace(/once/g, '1');
	text = text.replace(/doce/g, '1');
	text = text.replace(/trece/g, '1');
	text = text.replace(/catorce/g, '1');
	text = text.replace(/quince/g, '1');
	text = text.replace(/dieciseis/g, '1');
	text = text.replace(/diecisiete/g, '1');
	text = text.replace(/dieciocho/g, '1');
	text = text.replace(/diecinueve/g, '1');
	text = text.replace(/veinte/g, '1');
	text = text.replace(/veintiuno/g, '1');
	text = text.replace(/veintidos/g, '1');
	text = text.replace(/veintitres/g, '1');
	text = text.replace(/veinticuatro/g, '1');
	text = text.replace(/veinticinco/g, '1');
	text = text.replace(/veintiseis/g, '1');
	text = text.replace(/veintisiete/g, '1');
	text = text.replace(/veintiocho/g, '1');
	text = text.replace(/veintinueve/g, '1');
	text = text.replace(/treinta y uno/g, '1');
	text = text.replace(/treinta/g, '1');
	text = text.replace(/setiembre/g, 'septiembre');
	return text;
}