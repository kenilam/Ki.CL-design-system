build:
	@echo ⌛ building...
	yarn run build
	@echo done

install:
	@echo ⌛ installing...
	yarn
	@echo done

lint:
	@echo ⌛ linting...
	yarn run lint && yarn run lint:stylelint
	@echo done

run:
	@echo ⌛ running development...
	yarn run development

run.production:
	@echo ⌛ running production...
	yarn run production

start:
	@echo ⌛ starting...
	yarn install && yarn run start
	@echo ✅ done

typecheck:
	@echo ⌛ type checking...
	yarn run typecheck
	@echo done
