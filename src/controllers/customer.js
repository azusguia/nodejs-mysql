'use strict';

const { Customer } = require('../models');

exports.get = async (req, res) => {
	await Customer.findAll()
	.then(customers => {
		res.status(200).send(customers)
	})
	.catch((error) => {
		res.status(500).send({
			message: 'Failed to process your request: ' + error
		})
	})
}

exports.save = async (req, res) => {
	if (!req.body.name || !req.body.user || !req.body.age) {
		res.status(401).send({ message: 'Please, set all fields of Customer'})
		return
	}
	await Customer.create({name: req.body.name, user: req.body.user, age: req.body.age})
		.then(() => {
			res.status(201).send({
				message: 'Customer saved with success!'
			})
		})
		.catch((error) => {
			res.status(400).send({
				message: 'Failed to process your request: ' + error
			})
		})
}

exports.update = async (req, res) => {
	if (!req.body.name || !req.body.user || !req.body.age) {
		res.status(401).send({ message: 'Please, set all fields of Customer'})
		return
	}
	await Customer.update(
		{name: req.body.name, user: req.body.user, age: req.body.age}, 
		{where: {id: req.params.id}}
		)
		.then(() => {
			res.status(200).send({
				message: 'Customer updated with success!'
			})
		})
		.catch((error) => {
			res.status(400).send({
				message: 'Failed to process your request: ' + error
			})
		})
}

exports.delete = async (req, res) => {
	await Customer.destroy({where: {id: req.params.id}})
		.then(() => {
			res.status(200).send({
				message: 'Customer removed with success!'
			})
		})
		.catch((error) => {
			res.status(400).send({
				message: 'Failed to process your request: ' + error
			})
		})
}