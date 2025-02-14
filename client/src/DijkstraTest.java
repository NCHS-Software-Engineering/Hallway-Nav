package com.williamfiset.algorithms.graphtheory;

import java.util.List;


public class DijkstraTest {
  public static void main(String[] args) {
    // Create a graph with 6 nodes
    DijkstrasAlgorithm graph = new DijkstrasAlgorithm(6);
    
    // Add edges (from, to, cost)
    graph.addEdge(0, 1, 4);
    graph.addEdge(0, 2, 2);
    graph.addEdge(1, 2, 5);
    graph.addEdge(1, 3, 10);
    graph.addEdge(2, 4, 3);
    graph.addEdge(4, 3, 4);
    graph.addEdge(3, 5, 11);
    
    // Find the shortest path from node 0 to node 5
    List<Integer> path = graph.reconstructPath(0, 5);
    double distance = graph.dijkstra(0, 5);
    
    // Print results
    System.out.println("Shortest Path: " + path);
    System.out.println("Shortest Distance: " + distance);
  }
}
