package fi.monkaS.bloggingsitebackend;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BloggingSiteBackendApplication {

    private static String SERVER = "http://localhost:8080/";
    private static String RESOURCE = "posts/";

    public static void main(String[] args) {
        SpringApplication.run(BloggingSiteBackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner instructions() {
        return (String... args) -> {
            Log logger = LogFactory.getLog(BloggingSiteBackendApplication.class);
            logger.info("INSTRUCTIONS");
            logger.info("------------");
            logger.info("GET all blogposts");
            logger.info("    curl -X GET " + SERVER + RESOURCE);
            logger.info("GET one blogpost");
            logger.info("    curl -X GET " + SERVER + RESOURCE + "1");
            logger.info("DELETE one blogpost");
            logger.info("    curl -X DELETE " + SERVER + RESOURCE + "1");
            logger.info("POST one blogpost");
            logger.info("    curl -X POST -H \"Content-type: application/json\" -d \"{\\\"author\\\":\\\"Jaska\\\",\\\"content\\\":\\\"Nintendo is decent\\\",\\\"date\\\":\\\"2019-01-01\\\",\\\"title\\\":\\\"Nintendo\\\"}\" " + SERVER + RESOURCE);
        };
    }

}
