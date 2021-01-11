package com.example.Spring_Boot_Application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Spring_Boot_Application.model.Topic;
import com.example.Spring_Boot_Application.service.springBootService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")   // This is to allow cross origin data flow between one server to another server
public class SpringController {
	
	@Autowired
	private springBootService springbootservice;
	
	@RequestMapping(value="/")
	public String helloMethod()
	{
		return "hello friends";
	}
	
	@RequestMapping(value="/topics")
	public List<Topic> listOfTopcs()
	{
		return springbootservice.getAllTopics();
	}
	
	@RequestMapping(value="/topics/{id}")
	public Topic getRequiredTopic(@PathVariable String id)
	{
		return springbootservice.getTopic(id);
	}
	
	@RequestMapping(value="/topics/add",method=RequestMethod.POST)
	public String addTopic(@RequestBody Topic topic)
	{
		System.out.println("the topic"+topic);
		springbootservice.addTopic(topic);
		return "Post method successFully";
	}
	
	@RequestMapping(value="/topics/update/{id}",method=RequestMethod.PUT)
	public String updateTopic(@RequestBody Topic topic,@PathVariable String id)
	{
		springbootservice.updatetopic(topic,id);
		return "put method successful";
	}
	@RequestMapping(value="/topics/delete/{id}",method=RequestMethod.DELETE)
	public String deleteTopic(@PathVariable String id)
	{
		springbootservice.deletetopic(id);
		return "delete method successful";
	}
	
	//This endpoint will return the list of topic after delay of 5 sec
	@RequestMapping(value="/topicsWithDelay")
	public List<Topic> listOfTopcsWithDelay()
	{
		try {
			Thread.sleep(5000);
		} catch(InterruptedException e) {
			System.out.println("Damn! the error occured");
		}
		return springbootservice.getAllTopics();
	}
}
