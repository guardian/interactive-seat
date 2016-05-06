import bonzo from 'ded/bonzo';

let component = {
    init(content, config, isMobile) {
        this.content = content;
        this.isMobile = isMobile;
        this.config = config;

        if (this.content.src_sizes) {
            this.sizes = this.content.src_sizes.slice(1,-1).split(',');
        }

        if (this.content.images && this.content.images[0].src_sizes) {
            this.sizes = this.content.images[0].src_sizes.slice(1,-1).split(',');
        }

        this.bindEvents();

        return this.render();
    },

    bindEvents() {
        return this;
    },

    render() {
        let el = document.createElement('div');

        el.innerHTML = this.template({
            content: this.content,
            config: this.config,
            isMobile: this.isMobile
        });

        this.el = el.firstChild;
        this.$el = bonzo(this.el);

        return this;
    }
};

export default component;
