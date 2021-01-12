package com.example.Spring_Boot_Application.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Spring_Boot_Application.model.Topic;
import com.example.Spring_Boot_Application.repository.TopicRepository;
import com.example.Spring_Boot_Application.serviceInterface.SpringBootServiceInter;

@Service
public class springBootService implements SpringBootServiceInter {
    @Autowired
    private TopicRepository topicRepository;

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public Topic getTopic(String id) {
        Optional<Topic> topicEntity = topicRepository.findById(id);
        return topicEntity.isPresent() ? topicEntity.get() : null;
    }

    public void addTopic(Topic topic) {
        topicRepository.save(topic);
    }

    public void updatetopic(Topic topic, String id) {
        topicRepository.deleteById(id);
        topicRepository.save(topic);
    }

    public void deletetopic(String id) {
        topicRepository.deleteById(id);
    }
}
