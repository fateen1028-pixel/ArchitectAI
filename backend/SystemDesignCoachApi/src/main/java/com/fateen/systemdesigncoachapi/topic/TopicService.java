package com.fateen.systemdesigncoachapi.topic;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class TopicService {

    private final TopicRepository topicRepository;

    public TopicService(
            TopicRepository topicRepository
    ) {
        this.topicRepository = topicRepository;
    }

    public List<TopicResponse> getAllTopics() {
        return topicRepository
                .findAllByOrderByDisplayOrderAsc()
                .stream()
                .map(TopicResponse::from)
                .toList();
    }
}