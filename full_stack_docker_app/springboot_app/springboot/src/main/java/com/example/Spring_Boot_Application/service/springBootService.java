package com.example.Spring_Boot_Application.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Spring_Boot_Application.model.Topic;
import com.example.Spring_Boot_Application.repository.TopicRepository;
import com.example.Spring_Boot_Application.serviceInterface.SpringBootServiceInter;

@Service
public class springBootService implements SpringBootServiceInter{
	@Autowired
	private TopicRepository topicRepository;
	public List<Topic> getAllTopics()
	{
		return topicRepository.findAll();
	}
	public Topic getTopic(String id)
	{
		return topicRepository.findOne(id);
	}
	public void addTopic(Topic topic)
	{
		topicRepository.save(topic);
	}
	public void updatetopic(Topic topic,String id)
	{
		topicRepository.delete(id);
		topicRepository.save(topic);
	}
	public void deletetopic(String id)
	{
		topicRepository.delete(id);
	}	
}
