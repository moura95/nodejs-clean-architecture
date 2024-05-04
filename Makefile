start_db:
	docker compose up -d

stop_db:
	docker compose down

migrate:
	knex migrate:up

migrate-down:
	knex migrate:down

server:
	yarn run dev

.PHONEY: start_db stop_db server migrate migrate-down 