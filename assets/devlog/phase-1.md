# Sim3D: Phase 1 Devlog

## Introduction

Welcome to the development log for Phase 1 of [Sim3D](https://github.com/anm-ol/sim3d), a 3D particle simulation engine built from scratch using C++ and OpenGL. This devlog chronicles the journey from initial setup to a functioning particle system with basic physics and rendering capabilities.

## Project Overview

Sim3D is designed to simulate particles in a 3D environment, allowing for particle collision, movement, and interactive visualization. The project aims to create a robust foundation for more complex simulations in later phases.

## Phase 1 Objectives

1. Setting up environment
2. Implement basic rendering capabilities
3. Create a physics engine for particle simulation
4. Develop collision detection and response systems
5. Integrate rendering with the physics simulation

## Development Process

### Step 1: Setting up the environment

As this was my first ever time learning c++, I had to configure Visual Studio for OpenGl, as well as setting up the libraries that would neccessary

- GLFW was important for window creation without being OS specific, the other option was to use the Win32 API (scary stuff!)
- GLAD was imporant for loading OpenGL functions on any device
- GLM for matrix/vector operations

Deciding the application design was also important, since a well-planned design keeps everything organize, makes debugging a little less hellish and impementing new features along the way easier.

![SystemDesign](assets/devlog/image.png)

I learned how to write classes and headers in c++, later assigning everyone to work on different components.

### Step 2: Physics Engine Implementation

The next phase focused on creating the core physics engine, including:

- There would be particle class, the engine contains the dynamic array of the particles.
- Collision detection, the most computationally expensive part, initially involved checking collisions between each particle pair—resulting in a whopping 600,000 checks per second for simulating 100 particles at 60fps.
- We resolve if there is a collision, keeping momentum constant.

Key challenges:

- Removing all reduntant computation from collision to make it efficient. Example: we avoid calculating the square root in distance calculation

```cpp
bool isCollision(particle& p1, particle& p2)
{
	if(&p1 == &p2)
		return false;
	return dot(p1.pos - p2.pos, p1.pos - p2.pos) <= ((p1.size + p2.size) * (p1.size + p2.size));
```

- Fixing linker errors due to circular linking, this helped me learn how c++ works.

Code snippet (Engine update function):

```cpp
void Engine::updateall() //this is the main function that gets called in infinite loop
{
	particles.push_back(particle(glm::vec3(1), 1.0f));
	//call particle.update() for every element in array
	for (int i = 0; i < particles.size(); i++){
		particles[i].update(tconst);
		particles[i].velocity += globalAcc;
	}
	//call collision handling functions after updation
    checkCollision(particles);
}
```

### Step 3: Sphere Mesh Generation

Apparently you can't really render curves in OpenGL, everything needs to defined with vertices.
To render particles as spheres, we implemented a sphere mesh generation algorithm:

![spheremesh](assets/devlog/SphereMesh.png)

- Generating sphere vertices and indices as triangles
- Calculating normal data for proper lighting
- Adding the generated mesh to Vertex buffers ([how buffers work in openGL](https://yaakuro.gitbook.io/opengl-4-5/chapter1))
- Basic shaders to calculate diffuse lighting from a fixed point

Key challenges:

- Getting the buffers and normals to render
  ![Some failed attempts](assets/devlog/failedsphere.png)

[Some failed attempts](assets/devlog/fail.mp4)

Finally working!
![1](assets/devlog/sphere.png)

### Step 4: Integrating Rendering and Physics

This step involved combining the rendering system with the physics engine:

- Applying MVP (Model-View-Projection) matrices to particle positions
- Rendering a copy of the sphere mesh according to the transform matrix
- Implementing a camera system for scene navigation

[![Check this video to see some bouncing balls!](assets/devlog/demoimg.jpg)](assets/devlog/demo1.mp4)

![image](assets/devlog/balls.jpg)

### Step 5: Refinement and Bug Fixes

The final step of Phase 1 involved iterative refinement:

- Fixing collision issues, like particles leaking through walls.
- Weird behavious like particles sticking togethere.
- Adding simple controls like pause button.
- Enhancing visual quality with improved lighting and shading

Key improvements:

- Iteratively fixed collision bugs.
- Used Substeps - A technique used to break down a single frame into multiple time steps, to improve simulation stability/accuracy, at the cost of performance.
- Running around 10 substeps each frame, solved most of the collision issues.

## Challenges and Solutions

Throughout Phase 1, several challenges were encountered and overcome:

1. Shader compilation issues

   - Problem: Vertex and fragment shader linking error
   - Solution: Added utility functions inside shader class for logging and exception handling

2. collision logic
   - Problem: Very unstable, particles teleporting through walls
   - Solution: Used sub-steps between each frame for stability

## Performance Considerations

[Discuss any performance optimizations or considerations you made during Phase 1]

## Lessons Learned

- Gained crucial experience with C++ and its standard libraries.
- Learned how rendering engine design works, implemented various OOP concepts through abstractions
- Managed a codebase through git, resolving conflicts, managing branches, commits and issues.

## Future Improvements

This was just the Phase-1 of our journey, in the upcoming Devlog, I'll be showcasing these features and improvements

1. Implement more advanced collision resolution techniques
2. Exploring how memory works under the hood, and pushing the engine to its limits!
3. Adding more realistic lighting
4. Exploring how Immediate mode GUI, and adding a much needed Editor to our engine.

## Conclusion

Phase 1 of Sim3D has laid a solid foundation for our 3D particle simulation engine. We've successfully implemented basic rendering, a functional physics engine, and particle interactions

Make sure to checkout the [github repo](https://github.com/anm-ol/sim3d) if you want to follow us as we add new features or if you want to try it out yourself.

## Appendix

### Project Structure

```
sim3d/
├── shader/
├── src/
│   ├── include/
│   ├── lib/
│   ├── Engine.cpp
│   ├── Engine.h
│   ├── camera.h
│   ├── collision.cpp
│   ├── collision.h
│   ├── glad.c
│   ├── gui.cpp
│   ├── main.cpp
│   ├── particle.cpp
│   ├── particle.h
│   ├── renderer.cpp
│   ├── renderer.h
│   └── shader.h
```

## Here's some etra info for you to read about

I reccomend going through [learnopengl.com](www.learnopengl.com)
and [Cherno's youtube channel ](https://youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2&si=X41EpvzS3mkZJK0V)
which is a goldmine if you want to learn graphics programming and c++. This was very helpful in setting up the project.

1. **Buffers**: Buffers are memory storage locations used to hold data that can be processed by the GPU. Examples include Vertex Buffer Objects (VBOs) and Element Buffer Objects (EBOs). They are used to store vertex data, indices, and other attributes.

2. **Shaders**: Shaders are small programs that run on the GPU. They are used to control the rendering pipeline stages. The two most common shaders are the Vertex Shader, which processes each vertex, and the Fragment Shader, which processes each pixel.

3. **Rendering**: Rendering is the process of generating an image from a model. In OpenGL, rendering involves setting up the scene, binding the appropriate buffers, using shaders, and issuing draw calls to render the objects on the screen.
