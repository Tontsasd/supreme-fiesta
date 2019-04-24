package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

@RestController
public class MyRestController {

    @Autowired
    BlogpostRepository blogpostRepository;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Blogpost> addPost(@RequestBody Blogpost p, UriComponentsBuilder b) {
        blogpostRepository.saveEntity(p);

        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(p, headers, HttpStatus.CREATED);
    }

    /*@RequestMapping
    public ResponseEntity<Void> updatePost(@RequestBody Blogpost p, UriComponentsBuilder b) {
        blogpostRepository.update(p);

        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.OK);
    }*/

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<Blogpost> getAllPosts() {
        return blogpostRepository.findAll();
    }

    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.GET)
    public Blogpost getPost(@PathVariable Long postId) {
        Optional<Blogpost> b = Optional.ofNullable(blogpostRepository.findById(postId));

        if (!b.isPresent())
            throw new BlogpostNotFoundException("id: " + postId);

        return blogpostRepository.findById(postId);
    }

    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
        blogpostRepository.deleteById(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
