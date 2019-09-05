FROM gitpod/workspace-full:latest

USER root
# Install custom tools, runtime, etc.
# RUN npm install -g expo-cli

USER gitpod
# Apply user-specific settings
# ENV ...
RUN npm install -g expo-cli

# Give back control
USER root
