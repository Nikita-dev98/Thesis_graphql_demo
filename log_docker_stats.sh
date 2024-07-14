#!/bin/bash
while true; do
  docker stats graphql_api-container --no-stream >> docker_stats.log
  sleep 1
done

