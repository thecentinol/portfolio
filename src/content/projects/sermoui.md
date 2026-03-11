---
title: "SermoUI"
desc: "A local web interface for running and testing LLMs. Supports model switching, conversation history, and streaming responses."
tags: ["React", "Typescript", "Ollama API", Zustand]
displayedTags: ["Ollama API", "React", "Zustand"]
featured: true
---

# SermoUI

This is meant to be a quick web UI for you to test your local LLM's (currently only supports Ollama)
and check their performance, accuracy, token usage and what not. Nothing fancy, just a dead simple
interface without the bloat where everything stays local.

## Roamap

- Add other APIs (Anthropic, OpenAI, Gemini, xAI, Huggingface)
- Containerise with a PostgreSQL DB
- Multi-model streamed response outputs from a single prompt
