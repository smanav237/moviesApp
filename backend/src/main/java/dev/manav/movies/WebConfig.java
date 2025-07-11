package dev.manav.movies;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer customCorsConfigurer() {
       return new WebMvcConfigurer() {
		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
					.allowedOrigins("http://localhost:3000", "https://372da417b1c1.ngrok-free.app")
					.allowedMethods("*")
					.allowedHeaders("*")
					.allowCredentials(true)
					.maxAge(3600);
		}
	};
    }
}
