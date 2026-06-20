package com.fateen.systemdesigncoachapi.topic;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private final TopicService topicService;

    public TopicController(
            TopicService topicService
    ) {
        this.topicService = topicService;
    }

    @GetMapping
    public ResponseEntity<List<TopicResponse>>
    getAllTopics() {

        List<TopicResponse> topics =
                topicService.getAllTopics();

        return ResponseEntity.ok(topics);
    }
}
