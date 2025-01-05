package com.musicplayer.model;

public class Song {
    private int id;
    private String name;
    private String duration;
    private String filePath;

    // Default constructor
    public Song() {
    }

    // Parameterized constructor
    public Song(int id, String name, String duration, String filePath) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.filePath = filePath;
    }

    // Getter and setter for id
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // Getter and setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and setter for duration
    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    // Getter and setter for filePath
    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    // Optional: Override toString for better display of song information
    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", duration='" + duration + '\'' +
                ", filePath='" + filePath + '\'' +
                '}';
    }
}
