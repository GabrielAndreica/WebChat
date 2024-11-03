package com.example.webchat.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()  // Dezactivează CSRF pentru simplitate (nu este recomandat în producție)
                .authorizeRequests()
                .requestMatchers("/index.html").permitAll()  // Permite accesul la index.html
                .anyRequest().authenticated()  // Necesită autentificare pentru toate celelalte cereri
                .and()
                .formLogin()
                .loginPage("/login")  // Pagină de login personalizată
                .defaultSuccessUrl("/home", true)  // Redirecționare după login reușit
                .failureUrl("/login?error=true")  // Redirecționare după eșec
                .permitAll()  // Permite tuturor accesul la pagina de login
                .and()
                .logout()
                .permitAll();  // Permite tuturor să se deconecteze

        return http.build();
    }
}